import {Image, Text, View} from "react-native";
import {COLORS, FONTS, SIZES} from "../constants";
import assets from "../constants/assets";

const HomeHeader = () => {
    return(
        <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text>NFTify</Text>
            </View>
        </View>
    )
}

export default HomeHeader;
