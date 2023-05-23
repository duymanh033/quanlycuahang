import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { icon } from '../conten';
import FiveStar from './FiveStar';
export default function Details(props) {
    const route = useRoute();
    const navigation = props.navigation;

    const { item, data, setData } = route.params;
    const onDelete = (idItem) => {
        const newList = data.filter((item) => item.id !== idItem);
        setData(newList);

    }
    const onFollow = () =>{
        if(item.follow >0){
          return item.follow;
        }else{
            return 0;
        }
    }
    return (
        <View style={{}}>
             <View style={{ height: 10, width: "100%", backgroundColor: "#dcdcdc", marginTop: 10 }} />
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>Chi tiết</Text>

                <View style={{
                    flexDirection: "row", marginTop: 10, justifyContent: "flex-start",
                }}>
                    <Image style={{ width: 20, height: 20, tintColor: "gray" }} source={icon.dress} />
                    <Text style={{ marginLeft: 8 }}>Địa chỉ: {item.drees}</Text>
                </View>
                <View style={{
                    flexDirection: "row", marginTop: 10, justifyContent: "flex-start",
                }}>
                    <Image style={{ width: 20, height: 20, tintColor: "gray" }} source={icon.phone} />
                    <Text style={{ marginLeft: 8 }}>Phone: {item.phone}</Text>
                </View>
            </View>
            {}
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ flexDirection: "row", marginVertical: 10, marginTop: 18 }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Edit", {item, setData , data })

                        }}
                        style={{
                           
                            width: "80%",
                            backgroundColor: "white",
                            alignItems: "center",
                            borderRadius: 10,
                            marginRight: 10,
                            justifyContent: "center",
                            flexDirection: "row",
                        }}>
                        <Image style={{
                            width: 15, height: 15, tintColor: "black",
                            marginRight: 10
                        }} source={icon.edit} />
                        <Text style={{ paddingVertical: 6, color: "black" }}>Chỉnh sửa </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            onDelete(item.id);
                            navigation.navigate("QuanLy");

                        }}
                        style={{
                            flex: 1,
                            backgroundColor: "red",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 10,
                        }}>
                        <Image style={{ width: 15, height: 15, tintColor: "white" }} source={icon.delete} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={{ height: 10, width: "100%", backgroundColor: "#dcdcdc", marginTop: 10 }} />
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>Chi tiết</Text>

                <View style={{
                    flexDirection: "row", marginTop: 10, justifyContent: "flex-start",
                }}>
                    <Image style={{ width: 20, height: 20, tintColor: "gray" }} source={icon.dress} />
                    <Text style={{ marginLeft: 8 }}>Dress: {item.drees}</Text>
                </View>
                <View style={{
                    flexDirection: "row", marginTop: 10, justifyContent: "flex-start",
                }}>
                    <Image style={{ width: 20, height: 20, tintColor: "gray" }} source={icon.phone} />
                    <Text style={{ marginLeft: 8 }}>Phone: {item.phone}</Text>
                </View>
            </View> */}
        </View>

    )

}