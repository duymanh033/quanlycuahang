
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { API_BOOK } from '../../helpers/api';
// import AsyncStorage from '@react-native-community/async-storage';
export default function Add(props) {
    const route = useRoute();
    const {data, setData} = route.params;
    const MoveScesen = (tenMH, data = {}) => {
        navigation.navigate(tenMH, data);
    }
    const navigation = props.navigation;
    const onClear = () => {
        setName("");
        setDrees("");
        setPhone("");
        setImage("");
    }
    const [name, setName] = useState('');
    const [drees, setDrees] = useState('');
    const [phone, setPhone] = useState('');
    const [Image, setImage] = useState('');
    const [status, setStatus] = useState(1);

    const newList = {
        id: data.length == 0 ? 1 : data[data.length - 1].id + 1,
        name, drees, phone, Image, status
    }
    useEffect(() => {
        if (editData) {
            setName(editData.name);
            setAuthor(editData.author);
            // setPrice(editData.price + "");
            setPrice(`${editData.price}`);
            setStatus(editData.status ? true : false);
        }
    }, [editData?.id]);

    const onSave = () => {
        // const newObj = {
        //     name: name,
        //     author: author,
        //     price: price,
        //     status: status
        // };
        const newObj = {
            name,
            drees,
            phone,
            Image,
            status: status ? 1 : 0
        };
        fetch(
            !editData ? API_BOOK : `${API_BOOK}/${editData.id}`,
            {
                method: !editData ? 'POST' : 'PUT',
                body: JSON.stringify(newObj),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then(res => nav.goBack())
        .catch(err => console.log(err));
    };
    // const saveData = async () => {
    //     try {
    //       await AsyncStorage.setItem('key', JSON.stringify(newList));
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{
                fontSize: 25, fontWeight: "bold", alignSelf: "center",
                marginTop: 10
            }}></Text>
            <TextInput
                onChangeText={(text) => {
                    setName(text);
                }}
                style={{ marginTop: 30, borderWidth: 0, padding: 7 }}
                placeholder='Name ' />
            <TextInput
                onChangeText={(text) => {
                    setDrees(text);
                }}
                style={{ marginTop: 20, borderWidth: 0, padding: 7 }}
                placeholder='Địa chỉ' />
            <TextInput
                onChangeText={(text) => {
                    setPhone(text);
                }}
                style={{ marginTop: 20, borderWidth: 0, padding: 7 }}
                placeholder='Phone' />
            <TextInput
                onChangeText={(text) => {
                    setImage(text);
                }}
                style={{ marginTop: 20, borderWidth: 0, padding: 7 }}
                placeholder='Ảnh' />
            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 30 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{
                        backgroundColor: "white", borderRadius: 8,
                        marginRight: 10
                    }}>
                    <Text style={{ color: "black", padding: 10, fontWeight: "bold", }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                      setData([...data, newList]);
                      onClear();
                      navigation.navigate('QuanLy');
                      
                    }}
                    style={{ backgroundColor: "white", borderRadius: 8 }}>
                    <Text style={{ color: "black", padding: 10, fontWeight: "bold" }}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}