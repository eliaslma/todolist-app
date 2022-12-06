import React from "react";
import { Container, Title, Icon } from "./styles";
import {RectButtonProps} from 'react-native-gesture-handler';


interface Props extends RectButtonProps{
    onPress: () => void;
}


export function CreateButton({ onPress, ...rest} : Props){
    
    return(
        <Container onPress={onPress}>
            <Title>Criar</Title>
            <Icon name="add-circle-outline"/>
        </Container>

    );

}