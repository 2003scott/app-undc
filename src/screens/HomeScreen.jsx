import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants"
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import CardHome from "../Components/CardHome";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <View style={styles.containerHome}>
      <View style={styles.containerHeader}>
        <View style={styles.user}>
          <View style={styles.userinfo}>
            <Text style={styles.textcolor}>
              Hola,<Text style={styles.userbold}>Diego</Text>
            </Text>
            <Text style={styles.textcolor}>U21234556</Text>
          </View>
          <Image
            style={styles.imgLogo}
            source={require("../../assets/usuario.png")}
          />
        </View>
        <View style={styles.fecha}>
          <Text style={styles.textfecha}>Martes, 17 de Nv.2023</Text>
        </View>
      </View>
      <View style={styles.procesoadmin}>
        <Text style={styles.procesotexto}>Proceso de Admision</Text>
      </View>
      <View style={styles.containercard}>
        <CardHome
          titulo="Preinscritos"
          subtitulo="Pendiente de pagos"
          indicador="57"
        />
        <CardHome
          titulo="Inscritos"
          subtitulo="Postulantes inscritos"
          indicador="20"
        />
        <CardHome
          titulo="Prospectos"
          subtitulo="Prospectos adquiridos"
          indicador="56"
        />
        <CardHome
          titulo="Derecho de Examen"
          subtitulo="Derechos aquiridos"
          indicador="52"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: "#EEF4F9",
    height: height,
    width: width,
    paddingTop : Constants.statusBarHeight,
  },
  containerHeader: {
    width: width,
    height: 120,
    backgroundColor: "#32AE59",
    // borderBottomLeftRadius : 1000,
    // borderBottomRightRadius : 1000,
  },
  textcolor: {
    color: "#fff",
    fontSize: 16,
  },
  userbold: {
    fontWeight: "bold",
  },

  procesoadmin: {
    padding: 10,
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: "#32AE59",
    marginHorizontal: 20,
    alignItems: "center",
  },
  procesotexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  containercard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  textfecha: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  user : {
    flexDirection : 'row',
    justifyContent : 'flex-end',
    alignItems : 'center',
    gap : 20,
    marginHorizontal : 20,
    marginTop : 20,
  },
  fecha : {

    marginTop : 20,
  }
});
