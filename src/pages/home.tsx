import React from "react";
import { Container, Header } from "./styles";
import Logo from '../assets/todoLogo.svg';
import { RFValue } from "react-native-responsive-fontsize";



export function Home(){

    return(
        
            <Container>
                <Header>
                    <Logo/>
                </Header>

            </Container>
       
    )

};

