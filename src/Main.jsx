import React from "react";
import { Text, View } from "react-native";
import AppBar from "./Components/AppBar";
import HomeScreen from "./screens/HomeScreen";
import PagosScreen from "./screens/PagosScreen";
import ProspectoScreen from "./screens/ProspectoScreen";
import InscripcionScreen from "./screens/InscripcionScreen";
import { Routes , Route,Navigate } from "react-router-native";

const Main = () => {
    return (
        <View style={{flex : 1}}>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/pagos" element={<PagosScreen/>}/>
                <Route path="/prospecto" element={<ProspectoScreen/>}/>
                <Route path="/inscripcion" element={<InscripcionScreen/>}/>
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <AppBar/>
        </View>
    );
}

export default Main;
