import React from 'react'
import {
    View, Text,
    StyleSheet, Dimensions, Animated, Image, TouchableOpacity
} from 'react-native'
import { Icon } from 'react-native-elements'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ARR_STORY = [
    {
        story_id:1,
        stroy_img:"https://awsimages.detik.net.id/community/media/visual/2019/05/15/5ca24fa2-3a58-4efd-99e1-6a2b12654561.png?w=900&q=70",
        story_is_online:true
    },
    {
        story_id:2,
        stroy_img:"https://cdn.akurat.co/images/uploads/images/akurat_20200120080135_Etnx39.jpg",
        story_is_online:true
    },
    {
        story_id:3,
        stroy_img:"https://cdn.akurat.co/images/uploads/images/akurat_20200120080135_Etnx39.jpg",
        story_is_online:true
    },
    {
        story_id:4,
        stroy_img:"https://cdn.akurat.co/images/uploads/images/akurat_20200120080135_Etnx39.jpg",
        story_is_online:false
    },
    {
        story_id:5,
        stroy_img:"https://cdn.akurat.co/images/uploads/images/akurat_20200120080135_Etnx39.jpg",
        story_is_online:false
    },
    {
        story_id:6,
        stroy_img:"https://cdn.akurat.co/images/uploads/images/akurat_20200120080135_Etnx39.jpg",
        story_is_online:false
    },
    {
        story_id:7,
        stroy_img:"https://cdn.akurat.co/images/uploads/images/akurat_20200120080135_Etnx39.jpg",
        story_is_online:false
    },
    {
        story_id:8,
        stroy_img:"https://cdn.akurat.co/images/uploads/images/akurat_20200120080135_Etnx39.jpg",
        story_is_online:false
    },
    {
        story_id:9,
        stroy_img:"https://cdn.akurat.co/images/uploads/images/akurat_20200120080135_Etnx39.jpg",
        story_is_online:false
    }
]


export default class Home extends React.Component {
    renderStory() {
        return(
            ARR_STORY.map((item, key) => {
                return(
                    <View style={{width:70, marginRight:15, justifyContent:'center', alignItems:'center'}} key={key}>
                        <View style={{width:50, height:50, borderRadius:50}}>
                            <Image 
                                source={{uri:item.stroy_img}}
                                style={{width:50, height:50, borderRadius:50}}
                            />
                            {
                                item.story_is_online? 
                                <View style={{width:15, height:15, borderRadius:15, backgroundColor:'green',
                                        position:'absolute', bottom:0, right:0
                                    }}
                                />
                                :
                                <View style={{width:15, height:15, borderRadius:15, backgroundColor:'#e74c3c',
                                        position:'absolute', bottom:0, right:0
                                    }}
                                />
                            }
                        </View>
                        <Text numberOfLines={1} style={{marginTop:5}}>Its Number #{key+1}</Text>
                    </View>
                )
            })
        )
    }

    render() {
        return(
            <>  
                <View style={{
                        backgroundColor:'#fff', height:100,
                        alignItems:'center', justifyContent:'center',
                        paddingTop:5
                    }}>
                    <Animated.ScrollView
                            horizontal={true} showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{paddingStart:15}}
                        >    
                        <View style={{width:70, marginRight:15, justifyContent:'center', alignItems:'center'}}>
                            <View style={{width:50, height:50, borderRadius:50}}>
                                <Image 
                                    source={{uri:'https://awsimages.detik.net.id/community/media/visual/2019/05/15/5ca24fa2-3a58-4efd-99e1-6a2b12654561.png?w=900&q=70'}}
                                    style={{width:50, height:50, borderRadius:50}}
                                />
                            </View>
                            <Text numberOfLines={1} style={{marginTop:5}}>Firzan Risnanda</Text>
                        </View> 
                        {this.renderStory()}
                    </Animated.ScrollView>
                </View>

                <Animated.ScrollView
                            Vertical={true} showsVerticalScrollIndicator={true}
                            contentContainerStyle={{paddingStart:15}}
                        >
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image
                    source={{ uri: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blog/play/dota_heroes.png' }}
                    style={{ width: 500, height: 250}}
                    />
    
                    <View style={{width:70, marginRight:300, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <Icon
                        name='heart'
                        type='evilicon'
                        color='#517fa4'
                        size={35}
                        />
                        <Icon
                        name='comment'
                        type='evilicon'
                        color='#517fa4'
                        size={35}
                        />
                        <Icon
                        name='sc-telegram'
                        type='evilicon'
                        color='#517fa4'
                        size={35}
                        />
                    </View>
                    <Text style={{ lineHeight:20, textAlign:'auto', marginTop:5, marginRight:40}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', marginTop:15}}>
                    <Image
                    source={{ uri: 'https://i.pinimg.com/originals/0d/23/b6/0d23b655617ae0f99abe30e04d99a9f8.png' }}
                    style={{ width: 500, height: 250}}
                    />
                    
                    <View style={{width:70, marginRight:300, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <Icon
                        name='heart'
                        type='evilicon'
                        color='#517fa4'
                        size={35}
                        />
                        <Icon
                        name='comment'
                        type='evilicon'
                        color='#517fa4'
                        size={35}
                        />
                        <Icon
                        name='sc-telegram'
                        type='evilicon'
                        color='#517fa4'
                        size={35}
                        />
                    </View>

                    <Text style={{ lineHeight:21, textAlign:'left', marginTop:5, marginRight:40
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', marginTop:15}}>
                    <Image
                    source={{ uri: 'https://wallpapercave.com/wp/wp3070126.jpg' }}
                    style={{ width: 500, height: 250}}
                    />

                    <View style={{width:70, marginRight:300, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <Icon
                        name='heart'
                        type='evilicon'
                        color='#517fa4'
                        size={35}
                        />
                        <Icon
                        name='comment'
                        type='evilicon'
                        color='#517fa4'
                        size={35}
                        />
                        <Icon
                        name='sc-telegram'
                        type='evilicon'
                        color='#517fa4'
                        size={35}
                        />
                    </View>

                    <Text style={{ lineHeight:21, textAlign:'left', marginTop:5, marginRight:40
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </View>
                </Animated.ScrollView>
            </>
        )
    }
}

