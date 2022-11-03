import { View, Text, TouchableOpacity, TextInput } from "react-native";
import  Feather  from "react-native-vector-icons/Feather";
import { useState } from "react";
import { styles } from "./styles";
import { CheckBox } from "./components/checkBox";
import { dados } from "../..";

interface itemProps {
    title: string,
    onRemove: () => void
    setTask: React.Dispatch<React.SetStateAction<dados[]>>
    check: boolean
}

export function ListItem({title, onRemove, setTask, check}: itemProps) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    function handlerCheck() {
        setToggleCheckBox(!toggleCheckBox)
        if(toggleCheckBox == true){
            setTask(preventTask => [{titulo: title, check: false}, ...preventTask.filter(item => item.titulo !== title)])
        }else if(toggleCheckBox == false){ 
            setTask(preventTask => [{titulo: title, check: true}, ...preventTask.filter(item => item.titulo !== title)])
        }   
    }
    console.log(title)
    console.log(toggleCheckBox)

    if(!check){
        return(
            <View style={styles.box}>
                <CheckBox setToggleCheckBox={handlerCheck} toggleCheckBox={toggleCheckBox}/>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity style={styles.boxDelete} onPress={onRemove}>
                    <Feather name="trash-2" color="#808080" size={20}/>
                </TouchableOpacity>
            </View>
        )
    }else {
        return(
            <View style={styles.box}>
                <CheckBox setToggleCheckBox={handlerCheck} toggleCheckBox={toggleCheckBox}/>
                <Text style={styles.titleComplete}>{title}</Text>
                <TouchableOpacity style={styles.boxDelete} onPress={onRemove}>
                    <Feather name="trash-2" color="#808080" size={20}/>
                </TouchableOpacity>
            </View>
        )
    }

    
}