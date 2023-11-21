import React from 'react';
import { View,Text, StyleSheet,TouchableOpacity } from 'react-native';

function CardHome({titulo,subtitulo,indicador}) {
    return (
        <TouchableOpacity style={styles.containercard}>
            <View>
                <Text style={styles.tituloadmin}>{titulo}</Text>
                <Text style={styles.subtituloadmin}>{subtitulo}</Text>
            </View>
            <View>
                <Text style={styles.indicador}>{indicador}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containercard : {
        marginHorizontal : 10,
        backgroundColor : '#fff',
        width : "100%",
        height : 95,
        borderRadius : 5,
        margin : 10,
        padding : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 1,
        },
        shadowOpacity : 0.29,
        shadowRadius : 4.65,
        elevation : 7,
    },
    tituloadmin : {
        fontSize : 20,
        fontWeight : 'bold',
    },
    indicador : {
        fontSize : 48,
        fontWeight : 'bold',
        color : '#32AE59',
    },
    subtituloadmin : {
        fontSize : 16,
        color : '#808080',
    }
})


export default CardHome;