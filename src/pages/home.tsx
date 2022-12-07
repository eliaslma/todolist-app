import React, {useState} from "react";
import { FlatList } from "react-native";
import Logo from '../assets/todoLogo.svg'
import { getBottomSpace } from "react-native-iphone-x-helper";

import { Input } from "../components/Input";
import { CreateButton } from "../components/CreateButton";
import { TaskCounter } from "../components/TaskCounter";
import { NoTasks } from "../components/NoTasks";
import { TaskCard } from "../components/TaskCard";

import {
    Container, 
    Header, 
    InputContainer, 
    TaskContainer, 
    TaskHeader, 
    Tasks,
} from "./styles";


interface TaskData{
    id: number;
    label: string;
    isChecked: boolean;
    

}

export function Home(){

    const [newTask, setNewTask] = useState(''); // controla o estado do input
    const [createdTasks, setQuantityTask] = useState(0); // controla a quantidade de tasks criadas
    const [newTasks, setNewTasks] = useState<TaskData[]> ([]); // controla os objetos task no vetor new tasks
    const [completedTasks, setTaskCompleted] = useState(0); // controla quantidade de tasks completadas
    
    // função para adicionar uma tarefa da lista
    function handleAddNewTask(){
        
        setQuantityTask(createdTasks + 1)
        
        const data = {
            id: new Date().getTime(),
            label: newTask,
            isChecked: false,
        }
        setNewTask('') // limpa o input da tarefa
        setNewTasks(oldState => [...oldState,data])
    }

    // função para remover um tarefa da lista
    function handleRemoveTask(id: number){   
            
            // remove a task do vetor e decrementa a quantidade de tarefas criadas
            setNewTasks(oldState => oldState.filter(task => task.id !== id))
            setQuantityTask(createdTasks - 1);

            // verifica se a tarefa está marcada para poder decrementar
            // o valor de tarefas concluídas
            newTasks.map(( newTasks) => {
                if(newTasks.id === id){
                    if(newTasks.isChecked){
                        setTaskCompleted(completedTasks - 1)
                    }
                }
            }) 
    }

    // função para atualizar o check dos botões
    function handleCheckTask(taskId: number){
        const newTasksChecked = newTasks.map((newTasks) => {
            if(newTasks.id === taskId){
                if(!newTasks.isChecked){ // na primeira chamada da função button.isChecked == false
                setTaskCompleted(completedTasks + 1) // irá incrementar as tasks completadas
                }
                else {
                    setTaskCompleted(completedTasks - 1)
                }
                return {
                    ...newTasks,
                    isChecked: !newTasks.isChecked
                };
            }
            

         return newTasks;
         });
      
         setNewTasks(newTasksChecked); // atualiza o vetor com os botões pressionados (ischecked = true)

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
                        value={newTask}
                    />
                    <CreateButton onPress={handleAddNewTask}/>                    
                </InputContainer>
                <TaskContainer>
                    <TaskHeader>
                        <TaskCounter type={'created'} title={'Tarefas criadas'} tasksCreated={createdTasks} tasksConcluded={completedTasks}/>
                        <TaskCounter type={'concluded'} title={'Concluídas'} tasksCreated={createdTasks} tasksConcluded={completedTasks}/>
                    </TaskHeader>
                    <Tasks>
                    {createdTasks ? ( 
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{paddingBottom: getBottomSpace()}}
                            data={newTasks}
                            renderItem={ ({item}) => ( 
                                <TaskCard
                                id={item.id} 
                                label={item.label} 
                                deleteFunction={handleRemoveTask} 
                                checkFunction={handleCheckTask}
                                isChecked={item.isChecked}
                                />
                            
                            )}
                        />
                    
                    ) : (<NoTasks/>)}
                    </Tasks>
                </TaskContainer>

            </Container>
       
    )

}

