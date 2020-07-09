import React from 'react';
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    Text,
    Animated, Image

} from 'react-native';

import { SearchBar } from 'react-native-elements';


export default class App extends React.Component {
  state = {
    search: '',
  };
  
  _onChangeSearch = query => this.setState({ search: query });
  

  render() {
    const { search } = this.state;
    return (
        <>
            <View style={{backgroundColor:'#fff', width: 500, height: 80, justifyContent:'center', paddingTop:25}}>
                <SearchBar
                    platform={Platform.OS}
                    onChangeText={this._onChangeSearch}
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Type Here...' 
                    value={search}
                />
            </View>

            <Animated.ScrollView
                Vertical={true} showsVerticalScrollIndicator={true}
                contentContainerStyle={{paddingStart:15}}>

                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                    <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80' }}
                    style={{ width: 200, height: 200}}/>
                    <Image
                    source={{ uri: 'https://format-com-cld-res.cloudinary.com/image/private/s--MUCM0Pxn--/c_limit,g_center,h_65535,w_550/a_auto,fl_keep_iptc.progressive,q_95/v1/8cfed6548b6e4a5d2b62c0f668fb4f08/SHARNEE-CONSTANCE-VICTORIA-EDIT-1web.jpg' }}
                    style={{ width: 200, height: 200}}/>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                    <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80' }}
                    style={{ width: 200, height: 200}}/>
                    <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }}
                    style={{ width: 200, height: 200}}/>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                    <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80' }}
                    style={{ width: 200, height: 200}}/>
                    <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }}
                    style={{ width: 200, height: 200}}/>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                    <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80' }}
                    style={{ width: 200, height: 200}}/>
                    <Image
                    source={{ uri: 'https://format-com-cld-res.cloudinary.com/image/private/s--MUCM0Pxn--/c_limit,g_center,h_65535,w_550/a_auto,fl_keep_iptc.progressive,q_95/v1/8cfed6548b6e4a5d2b62c0f668fb4f08/SHARNEE-CONSTANCE-VICTORIA-EDIT-1web.jpg' }}
                    style={{ width: 200, height: 200}}/>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                    <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80' }}
                    style={{ width: 200, height: 200}}/>
                    <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }}
                    style={{ width: 200, height: 200}}/>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                    <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80' }}
                    style={{ width: 200, height: 200}}/>
                    <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }}
                    style={{ width: 200, height: 200}}/>
                </View>

            </Animated.ScrollView>

        </>
    );
  }

}
