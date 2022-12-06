import React from "react";
import { Container, Title, CounterView, Value } from './styles';


interface Props {
    tasksCreated: Number;
    tasksConcluded: Number;
    title: String;
    type: 'created' | 'concluded'
     
}


export function TaskCounter({ tasksCreated, tasksConcluded, title, type } : Props){

    const createdTasks = tasksCreated.toString();
    const concludedTasks = tasksConcluded.toString();

    if(tasksCreated === 0){

        return (
             <Container >
                <Title type={type}>{title}</Title>
                <CounterView>
                <Value>{createdTasks}</Value>
                </CounterView>
            </Container>
    )
    }

    if(tasksCreated != 0 && type === 'concluded'){

        return (
            <Container >
               <Title type={type}>{title}</Title>
               <CounterView>
               <Value>{concludedTasks} de {createdTasks}</Value>
               </CounterView>
           </Container>
   )
        }

   if(tasksCreated != 0 && type === 'created'){

    return (
        <Container >
           <Title type={type}>{title}</Title>
           <CounterView>
           <Value>{createdTasks}</Value>
           </CounterView>
       </Container>
    )

    }


    

}