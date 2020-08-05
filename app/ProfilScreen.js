import React, { Component } from "react";
import { View, Text, Alert} from "react-native";
import { NeuButton } from "neumorphism-ui";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class App extends Component {
  render() {
    return (
      <View style={{width:'100%',height:'100%',backgroundColor:'#e0e5ec',justifyContent:'center',alignItems:'center'}}>

          {/* Circle NeuButton that stays pressed once clicked */}
            <NeuButton style={{ height: 150, width: 150, borderRadius: 75 }}
                onPress={() => {
                  Alert.alert("I was pressed")
                }}
                onUnpress={() => {
                  Alert.alert("I was unpressed")
                }}
              >
                <Text style={{ opacity: 0.4, textAlign: 'center' }}>NeuButton with listeners</Text>
            </NeuButton>
            
            {/* Rectangular NeuButton that doesn't stay pressed once clicked */}
            <NeuButton style={{ height: 70, width: 120, borderRadius: 50 }} noPressedState={true}
                onPress={() => {
                  Alert.alert("I was pressed")
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%' }}>
                <MaterialCommunityIcons
                    name='cards-heart'
                    type='evilicon'
                    color='#517fa4'
                    size={25}
                  />
                  <Text style={{ fontWeight: 'bold', opacity: 0.4 }}>LIKE</Text>
                </View>
            </NeuButton>

      </View>
    );
  }
}