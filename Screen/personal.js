import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { icon } from '../conten';

export default function Personal() {

return(
    <View style={{flex:1}}>
       {/* <Image style={{
        width:"100%",height:180
       }} source={{uri:"https://scontent.fhan9-1.fna.fbcdn.net/v/t1.6435-9/91841454_2623245344666949_2802595056903520256_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=tkkyKrTF5m0AX-GFPUT&_nc_ht=scontent.fhan9-1.fna&oh=00_AfDOvo5ZH_KY1r3dXl_GE27sjxI2WuEmGeh6hnGOUJTbJA&oe=6410E6C3"}}/> */}
       <Image style={{
        width:130 , height:130,
        borderRadius:65, justifyContent: "center" , alignSelf:"center",position:"absolute",
        marginTop:1 , borderWidth:3 , borderColor:"white",

       }} source={{uri:"https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/301349691_3318245141833629_8562567385087816688_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yPM2eVgYgY0AX9G7WL2&_nc_ht=scontent.fhan9-1.fna&oh=00_AfAV-HGlGsFtfECBWx8qnE7yi_ObnbVZv4XSe_4N9G9tmA&oe=63EE2598"}}/>
       <Text style={{alignSelf:"center", marginTop:150, fontSize:25, fontWeight:"bold"}}>Trương Quang Duy</Text>
       <Text style={{alignSelf:"center", fontSize:18}}>PH20012</Text>
    </View>
)

}