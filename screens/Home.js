import { useState } from "react";
import {View, FlatList, Text, SafeAreaView} from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

const Home = () => {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>

                </View>
            </View>
        </SafeAreaView>
    );
}

export default Home;
