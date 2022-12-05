import React from "react";
import { Input } from "../components/Input";
import { Container, Header, InputContainer } from "./styles";

import Logo from '../assets/todoLogo.svg'


export function Home(){

    return(
        
            <Container>
                <Header>  
                    <Logo/>
                </Header>
                <InputContainer>
                    <Input 
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                    />

                    

                    
                </InputContainer>

            </Container>
       
    )

}

