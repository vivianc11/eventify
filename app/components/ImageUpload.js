import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import client from "../api/client";
import { StackActions } from '@react-navigation/native'
import { useLogin } from "../context/LoginProvider";
import UploadProgress from "./UploadProgress";


const ImageUpload = (props) => {

  const [profileImage, setProfileImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { data } = props.route.params;
  const { setIsLoggedIn, setProfile } = useLogin();

  const pickImage = async () => {
    // No permissions request is necessary for launching the profileImage library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  }

  const uploadProfileImage = async () => {

    // need to clean up data using FormData
    const formData = new FormData();
    formData.append('profile', {
      name: new Date() + '_profile',
      uri: profileImage,
      type: 'image/jpg/png'
    })
    try {
      const res = await client.post('/upload-profile', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          // Need authorization because in backend, it requires auth to upload any profile pics
          Authorization: `JWT ${data.jwtToken}`,
        },
        onUploadProgress: ({ loaded, total }) => setUploadProgress(loaded / total)
      });

      console.log('user data:', data)
      if (res.data.success) {
        console.log('picture:', res.data)
        // props.navigation.dispatch(
        //   StackActions.replace('UserProfile')
        // );
        setProfile({ ...data.user, profilePic: res.data.profilePic})
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error.message)
    }


  }

  return (
    <>
      <View style={styles.container}>
        <View>
          {profileImage ? (
            <Text onPress={pickImage} style={[styles.skipText, styles.different]}>Upload a Different Image</Text>
          ) : null}
          <TouchableOpacity onPress={pickImage} style={styles.uploadButtonContainer}>
            {profileImage && <Image source={{ uri: profileImage }} style={{ width: 200, height: 200, borderRadius: 100 }} />}
            {profileImage ? null : (
              <Text style={styles.uploadButton}>Upload Profile Pic</Text>
            )}
          </TouchableOpacity>
          {/* {progress ? <Text>{progess}</Text> : null} */}
          <Text style={styles.skipText}>Skip</Text>
          {profileImage ? (
            <Text onPress={uploadProfileImage} style={styles.uploadText}>Upload</Text>
          ) : null}
        </View>
        {uploadProgress ? <UploadProgress process={uploadProgress} /> : null}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  uploadButtonContainer: {
    height: 200,
    width: 200,
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: "center",
    borderStyle: "dashed",
    borderWidth: 2.5,
    borderColor: '#E76F51'
  },
  uploadButton: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F4A261',
    opacity: 0.7,
  },
  skipText: {
    fontSize: 18,
    color: '#E9C46A',
    textAlign: 'center',
    marginTop: 20,
    paddingVertical: 10,
  },
  uploadText: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#E76F51',
    color: 'white',
    paddingVertical: 14,
    borderRadius: 8,
    overflow: 'hidden'
  },
  different: {
    marginTop: 0,
    color: '#E76F51'
  }
})

export default ImageUpload;