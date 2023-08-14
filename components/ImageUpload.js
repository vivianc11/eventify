import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = () => {

  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the profileImage library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={pickImage} style={styles.uploadButtonContainer}>
          {profileImage && <Image source={{ uri: profileImage }} style={{ width: 200, height: 200, borderRadius: 100 }} />}
          {profileImage ? null: (
            <Text style={styles.uploadButton}>Upload Profile Pic</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.skipText}>Skip</Text>
        {profileImage ? (
          <Text onPress={pickImage} style={styles.uploadText}>Upload</Text>
        ): null}
      </View>
    </View>
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
  }
})

export default ImageUpload;