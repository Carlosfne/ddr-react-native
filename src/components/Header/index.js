import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar, Image } from 'react-native';
import menu from '../../assets/menu.png';
import user from '../../assets/user.png';

export default function Header() {

    return(
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#E5E5E5' />
            <SafeAreaView >
                <View style={styles.header}>
                    <Image source={menu} style={styles.menu}/>
                    <Text style={styles.title}>Dashboard</Text>
                    <Image source={user} style={styles.menu}/>
                </View>
            </SafeAreaView>
        </>
    )
}

// Estilização do cabeçalho da aplicação
const styles = StyleSheet.create({  
    header:{
        backgroundColor:'#E5E5E5',
        flexDirection:'row',
        justifyContent: 'space-between',
        height:45,
        padding:10
    },
    menu :{
        width:20,
        height:20
    },
    title:{
        fontWeight: 'bold',
        fontSize: 15
    }
});