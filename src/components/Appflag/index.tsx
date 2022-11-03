import { Text, View } from "react-native";
import { styles } from './styles'

interface flagProps {
    texto: string,
    count: number | undefined,
}

export function Flag({texto, count}: flagProps) {
    return(
        <View style={styles.contentflag}>
            <Text style={styles.description}>{texto}</Text>
            <View style={styles.contador}>
                <Text style={styles.contadorText}>{count}</Text>
            </View>
        </View>
    )
}