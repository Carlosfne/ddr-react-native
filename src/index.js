import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from './components/Header';

import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import line from './assets/line.png';

export default function App() {

    return(
        <>
            <Header />
            <ScrollView style={styles.dashboard} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
                <LinearGradient 
                    style={styles.firstDiv}                    
                    colors={['#1089FF', '#23374D' ]}
                    start={{ x: 0.4, y: 0.9}}
                    end={{ x: 0.9, y: 0.5 }}
                >
                    <Text style={styles.title}>Alarmes</Text>
                    <Text style={styles.subtitle}>Falha na replicação das gravações do matching</Text>
                </LinearGradient>
                <View style={styles.secondDiv}>
                    <View style={styles.description}>
                        <Image source={logo2} />
                        <View styles={styles.titles}>
                            <Text style={styles.textBold}>Infinty</Text>
                            <Text style={styles.textBlue}>VER MAIS</Text>
                            <View style={styles.descriptionSub}>
                                <Text style={styles.textGray}>API: ON</Text>
                                <Text style={styles.textGray}>CLIENT: WORKING</Text>
                            </View>
                        </View>                        
                    </View>
                    <View style={styles.description}>
                        <Image source={logo1} />
                        <View styles={styles.titles}>
                            <Text style={styles.textBold} >Blueone</Text>
                            <Text style={styles.textBlue}>VER MAIS</Text>
                            <View style={styles.descriptionSub}>
                                <Text style={styles.textGray}>API: ON</Text>
                                <Text style={styles.textGray}>CLIENT: WORKING</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={styles.txtNext}>Próximo ticket:</Text>

                <View style={styles.thirdDiv}>
                    <Text style={styles.txtRefator}>Refatoração</Text>
                    <Text style={styles.txtRefatorsub}>Refatorar segunda etapa do matching 11/09/2020</Text>
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Image style={styles.img} source={line} />
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

// Estilização do cabeçalho da aplicação
const styles = StyleSheet.create({
    dashboard: {
        flexGrow: 1,
        backgroundColor: '#E5E5E5'
    },
    firstDiv:{
        width: '70%',
        backgroundColor:'#1089FF',
        borderRadius:20,
        paddingRight:25,
        paddingLeft:25,
        paddingBottom:30,
        paddingTop:30,
        justifyContent: 'center',
        marginTop:50
    },
    secondDiv:{
        backgroundColor:'#fff',
        width: '80%',
        flexDirection:'column-reverse',
        paddingTop: 100,
        paddingBottom:20,
        paddingLeft:15,
        paddingRight:20,
        marginTop: -80,
        zIndex:-1,
        borderRadius:20,
        marginBottom:30
    },
    title:{
        fontSize: 15,
        color: '#fff',
        marginBottom:10,
        fontFamily: 'MontRegular'
    },
    subtitle:{
        fontSize:15,
        fontWeight: '600',
        color: '#fff',
        fontFamily: 'mont'
    },
    description:{
        flexDirection:'row',
        alignItems:'center',
        fontFamily: 'mont',
    },
    descriptionSub:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width: 150

    },
    titles:{
        flexDirection:'column',
    },
    textBold:{
        fontWeight:'bold',
        fontFamily: 'mont'
    },
    textGray:{
        fontSize: 8,
        color:'#848484',
        fontFamily: 'MontRegular'
    },
    textBlue:{
       fontSize:8,
       color:'#1089FF',
       fontWeight: 'bold',
       textAlign:'right',
       fontFamily:'mont',
       marginRight: -35
    },
    txtNext:{
        fontWeight:'bold',
        fontSize:15,
        marginBottom: 20,
        fontFamily: 'mont'
    },
    thirdDiv:{
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 25,
        marginBottom: 50
    },
    txtRefator: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'mont'
    },
    txtRefatorsub :{
        fontSize: 15,
        lineHeight: 30,
        fontFamily: 'MontRegular'     
    },
    btn:{
        width: 50,
        height: 50,
        backgroundColor: '#000000',
        borderRadius: 16,
        // position:'absolute',
        // bottom: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        width:26,
        height:29
    }
});