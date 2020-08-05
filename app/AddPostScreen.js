import React from 'react';
import { Image,View, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 
import { NeuButton } from "neumorphism-ui";

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Diperlukan izin untuk mengakses kamera!");
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
      alert(`Berbagi foto tidak tersedia`);
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

        <NeuButton 
          onPress={openImagePickerAsync} 
          style={{borderRadius:50}} noPressedState={true}>
          <Text style={{textAlign: 'center'}}>Pilih Foto</Text>
        </NeuButton>
        
        <NeuButton onPress={openShareDialogAsync}style={{borderRadius:50}} noPressedState={true}>
          <Text style={{textAlign: 'center'}}>Bagikan Foto</Text>
        </NeuButton>

      </View>

    );
  
  }
    return (
      <View style={{ backgroundColor: '#fff', justifyContent: 'center'}}>
        <NeuButton onPress={openImagePickerAsync} style={{borderRadius:75}} noPressedState={true}>
          <Text style={{textAlign: 'center'}}>Pilih Foto</Text>
        </NeuButton>
        <NeuButton onPress={openShareDialogAsync}style={{borderRadius:75}} noPressedState={true}>
          <Text style={{textAlign: 'center'}}>Bagikan Foto</Text>
        </NeuButton>
      </View>
    );
}