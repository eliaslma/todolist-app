import React, {useState} from "react";
import { FlatList,Text } from "react-native";
import Logo from '../assets/todoLogo.svg'


import { Input } from "../components/Input";
import { CreateButton } from "../components/CreateButton";
import { TaskCounter } from "../components/TaskCounter";
import { NoTasks } from "../components/NoTasks";

import {
    Container, 
    Header, 
    InputContainer, 
    TaskContainer, 
    TaskHeader, 
} from "./styles";

interface TaskData{
    id: number;
    label: string;
    isSelected: boolean

}

export function Home(){

    const [newTask, setNewTask] = useState('');
    const [quantityTask, setQuantityTask] = useState(0);
    const [newTasks, setNewTasks] = useState<TaskData[]> ([]);
    const [completedTasks, setTaskCompleted] = useState(0);
    

    function handleAddNewTask(){
        setQuantityTask(quantityTask + 1)

        const data = {
            id: quantityTask,
            label: newTask,
            isSelected: false,
        }

        setNewTasks(oldState => [...oldState,data])
        
        

    }
    
    return(
        
            <Container>
                <Header>  
                    <Logo/>
                </Header>
                <InputContainer>
                    <Input 
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        onChangeText={setNewTask}
                    />
                    <CreateButton onPress={handleAddNewTask}/>                    
                </InputContainer>
                <TaskContainer>
                    <TaskHeader>
                        <TaskCounter type={'created'} title={'Tarefas criadas'} tasksCreated={quantityTask} tasksConcluded={completedTasks}/>
                        <TaskCounter type={'concluded'} title={'Concluídas'} tasksCreated={quantityTask} tasksConcluded={completedTasks}/>
                    </TaskHeader>
                    {quantityTask ? ( 
                        <FlatList
                            data={newTasks}
                            renderItem={ ({item}) => ( <Text>{item.label}</Text>)}
                        />
                    
                    ) : (<NoTasks/>)}
                </TaskContainer>

            </Container>
       
    )

}

