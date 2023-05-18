import { useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { Flag } from "../../components/Appflag";
import { Input } from "../../components/AppInput";
import { styles } from "./styles";
import { Feather } from 'react-native-vector-icons'
import { EmptyList } from "./components/empty";
import { Logo } from "./components/assets/logo";
import { ListItem } from "./components/ListItem/listItem";
import { Separator } from "../../components/AppSeparator";


export type dados = {
    titulo: string,
    check: boolean
}

export function Home() {
    const [count, setCount] = useState<number | undefined>(0)
    const [done, setDone] = useState<number>(0)
    const [task, setTask] = useState<dados[]>([])
    const [tasksName, setTasksName] = useState("")

 
    function onRemove(name: string ) {
        Alert.alert("Remover", `Deseja remover esta tarefa: ${name}?`,[
            {
              text: "Sim",
              onPress: () => setTask(preventTask => preventTask.filter(task => task.titulo != name)),
            },
            {
              text: "Não",
              style: "cancel",
            },
          ]);
    }

    useEffect(() => {
        let qtdCheck = 0

        task.map((item) => {
            if(item.check == true){
                 qtdCheck += 1
                 setDone(qtdCheck)
            }else if(item.check == false) {
                qtdCheck - 1
                setDone(qtdCheck)
            }
        })
    }, [task])
  
    
    return(
        <View style={styles.container}>
            <Logo />
            <Input 
                setTasksName={setTasksName} 
                tasksName={tasksName}
                task={task}
                setTask={setTask}

            />
            <View style={styles.tasks}>
                <Flag texto="Criadas" count={task.length}/>
                <Flag texto="Concluídas" count={done}/>
            </View>
            <Separator />
            <FlatList 
                style={styles.listItems}
                data={task}
                renderItem={({item})=> (
                    <ListItem 
                        key={item.titulo} 
                        title={item.titulo}  
                        check={item.check}
                        onRemove={() => onRemove(item.titulo)} 
                        setTask={setTask}
                    />
                )}
                keyExtractor={item => item.titulo}
                ListEmptyComponent={()=> (<EmptyList />)}

            />
        </View>
    )
}