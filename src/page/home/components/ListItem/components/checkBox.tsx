import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import  Feather  from "react-native-vector-icons/Feather";
import { styles } from "./styles";


interface checkboxProps {
    setToggleCheckBox: () => void
    toggleCheckBox: boolean
}

export function CheckBox({setToggleCheckBox, toggleCheckBox}: checkboxProps) {

    
    if(!toggleCheckBox){
        return (
            <TouchableOpacity style={styles.checkBox} onPress={setToggleCheckBox}>
            </TouchableOpacity>
        )
    }else {
        return(
            <TouchableOpacity style={styles.checkBox}>
                <Feather style={styles.check} name="check" color="white" onPress={setToggleCheckBox}/>
            </TouchableOpacity>
        )
    }
    
}