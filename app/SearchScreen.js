import React from 'react';
import { View, Animated, Image} from 'react-native';
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
            <View style={{backgroundColor:'#fff',justifyContent:'center', marginTop:30}}>
                <SearchBar
                    platform={Platform.OS}
                    onChangeText={this._onChangeSearch}
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Cari disini...' 
                    value={search}/>
            </View>

        </>
    );
  }

}

