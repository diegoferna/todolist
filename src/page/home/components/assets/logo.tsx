import { View, Text } from "react-native";
import { styles } from "./styles";


export function Logo() {
    return(
        <View style={styles.header}>
                <Text style={styles.logofirst}>to</Text>
                <Text style={styles.logosecond}>do</Text>
            </View>
    )
}