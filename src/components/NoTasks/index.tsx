import React from "react";
import Clipboard from '../../assets/Clipboard.svg'
import {
    Container,
    Separator,
    Title,
    Description

} from './styles'

export function NoTasks(){

    return(
        <>
        <Separator/>
        <Container>
            <Clipboard/>
            <Title>Você ainda não tem tarefas cadastradas</Title>
            <Description>Crie tarefas e organize seus itens a fazer</Description>
        </Container>
        </>
    )


}