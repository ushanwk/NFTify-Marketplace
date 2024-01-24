import {SafeAreaView, Text, View} from "react-native";
import {FocusedStatusBar, RectButton} from "../components";
import {SHADOWS, SIZES} from "../constants";

const Details = ({ route, navigation }) => {

    const { data } = route.params;

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />

            <View style={{ width: "100%", position: "absolute", bottom: 0, paddingVertical: SIZES.font, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255,255,255,0.5)", zIndex: 1,}}>
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>
        </SafeAreaView>
    );
}

export default Details;
