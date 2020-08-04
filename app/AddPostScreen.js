import React from 'react';
import { Image, Button, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }; 

  if (selectedImage !== null) {
    return (
      <View style={{ backgroundColor: '#fff', justifyContent: 'center'}}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={{ backgroundColor: '#fff', marginBottom:5,paddingStart: 15, width: 500, height: 250}}
        />
        <Button title="Pilih Foto" onPress={openImagePickerAsync}/>
        <Button title="Bagikan Foto" onPress={openShareDialogAsync}/>
      </View>
    );
  }
    return (
      <View>
        <Button title="Pilih Foto" onPress={openImagePickerAsync}/>
        <Button title="Bagikan Foto" onPress={openShareDialogAsync}/>
      </View>
    );
  }

