import React from "react"
import { StyleSheet, Text,View, TouchableOpacity,Image  } from "react-native";
import { Link } from "react-router-native";

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Link to="/">
                <TouchableOpacity style={styles.subiteam}>
                    <Image style={styles.imgicono} source={require('../../assets/Inicio.png')} />
                    <Text>Inicio</Text>
                </TouchableOpacity>
            </Link>
            <Link to="/pagos">
                <TouchableOpacity style={styles.subiteam}>
                    <Image style={styles.imgicono} source={require('../../assets/pago.png')} />
                    <Text>Pagos</Text>
                </TouchableOpacity>
            </Link>
            <Link to="/prospecto">
                <TouchableOpacity style={styles.subiteam}>
                    <Image style={styles.imgicono} source={require('../../assets/prospecto.png')} />
                    <Text>Prospecto</Text>
                </TouchableOpacity>
            </Link>
            <Link to="/inscripcion">
                <TouchableOpacity style={styles.subiteam}>
                    <Image style={styles.imgicono} source={require('../../assets/inscripcion.png')} />
                    <Text>Inscripcion</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff',
        position : 'absolute',
        bottom : 0,
        width : '100%',
        height : 74,
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
    },
    subiteam : {
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
    },
    imgicono : {
        width : 30,
        height : 30,
    }
})

export default AppBar;