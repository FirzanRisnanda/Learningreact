import * as React from 'react';
import { View, Text, SafeAreaView, Animated, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationScreen = () => {
  return (
            <Animated.ScrollView
                Vertical={true} showsVerticalScrollIndicator={true}
                contentContainerStyle={{backgroundColor:'#fff',paddingStart:5}}>
                
                <View style={{ backgroundColor:'#fff', height:60, paddingTop:5, flexDirection:'row'}}>
                  
                  <Image
                    source={{ uri: 'https://wallpapercave.com/wp/wp3070126.jpg' }}
                    style={{width: 50, height: 50}}/>
                  
                  <Text style={{paddingStart:15, width:250 ,lineHeight:15, textAlign:'left', marginTop:20}}>
                      Lorem Ipsum is simply dummy text
                  </Text>
                  
                  <View style={{marginLeft:50 ,justifyContent:'center'}}>
                  
                  <MaterialCommunityIcons
                    name='cards-heart'
                    type='evilicon'
                    color='#517fa4'
                    size={25}
                  />
                  </View>
                </View>

                <View style={{ backgroundColor:'#fff', height:60, paddingTop:5, flexDirection:'row'}}>
                  
                  <Image
                    source={{ uri: 'https://wallpapercave.com/wp/wp3070126.jpg' }}
                    style={{width: 50, height: 50}}/>
                  
                  <Text style={{paddingStart:15,width:250 ,lineHeight:15, textAlign:'left', marginTop:20}}>
                      Lorem Ipsum is simply dummy text 
                  </Text>
                  
                  <View style={{marginLeft:50 ,justifyContent:'center'}}>
                  <MaterialCommunityIcons
                    name='cards-heart'
                    type='evilicon'
                    color='#517fa4'
                    size={25}
                  />
                  </View>
                </View>
              </Animated.ScrollView>
  );
}
export default NotificationScreen;