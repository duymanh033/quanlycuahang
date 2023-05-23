
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { API_BOOK } from '../../helpers/api';
// import AsyncStorage from '@react-native-community/async-storage';
export default function QuanLyCuaHang(props) {
    const navigation = props.navigation;
    const route = useRoute();
    const [name, setName] = useState('');
    const [drees, setDrees] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const onClear = () => {
        setName("");
        setDrees("");
        setPhone("");
        setImage("");
    }
    const [data, setData] = useState([
        {
            id: 1,
            name: "Trà sữa Mixue",
            drees: " Mỹ đình- Nam Từ Liêm - Hà Nội",
            phone: "0982432401",
            follow: 30,
            star: 3,
            Image: "https://lamaca.vn/wp-content/uploads/2021/08/nh%C6%B0%E1%BB%A3ng-quy%E1%BB%81n-mixue.jpg",
           
        },
        {
            id: 2,
            name: "LẨU Nướng Không Khói",
            drees: "Cầu Giay - Hà Nội",
            phone: "0323232145",
            follow: 20,
            star: 4,
            Image: "https://tse2.mm.bing.net/th?id=OIP.8LFVaoG8tNK5s01Zj0BJZAHaFj&pid=Api&P=0",
           
        },
        {
            id: 3,
            name: "Quần áo đẹp",
            drees: "Thanh Trì - Hà Nội",
            phone: "038928392",
            follow: 60,
            star: 5,
            Image: "https://tse4.mm.bing.net/th?id=OIP.4yX-_QfJXiMIkKJbwsbZQgHaE6&pid=Api&P=0",
            
        },
        
    ]);
    const Status = (stus) => {
       
    }
    const ColorStatus = (stus) => {
   
    }
    return (
        <View style={{ padding: 20 }}>

            <FlatList data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Details', { item, setData, data })
                        }}>
                            <View style={{
                                flexDirection: "row", marginBottom: 20, padding: 10,
                                width: "100%", height: 120, borderWidth: 0, borderRadius: 8
                            }}>

                                <Image style={{
                                    height: 50, width: 50,  marginTop: 5
                                }}

                                    source={{ uri: item.Image }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                                    <View style={{ height: 0, backgroundColor: "black", width: "100%" }} />
                                    <Text>Địa chỉ: {item.drees}</Text>
                                    <Text>Phone: {item.phone}</Text>
                                  <View style={{ flexDirection: "row" }}>
                                        {/* <Text>Status: </Text> */}
                                        <Text style={{ color: ColorStatus(item.status) }}>{Status(item.status)}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }} />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Add", { data, setData });
                }}
                style={{
                    width: 50, height: 50, borderRadius: 25,
                    backgroundColor: "blue", position: "absolute", bottom: 20, right: 10,
                    alignItems: "center", justifyContent: "center"
                }}>
                <Image style={{ width: 20, height: 20 }} source={require("../assets/add.png")} />
            </TouchableOpacity>

        </View>

    )

}
