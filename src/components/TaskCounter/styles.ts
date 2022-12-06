import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


interface TypeProps {
    type: 'created' | 'concluded',    
}

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text<TypeProps>`

    font-size: ${RFValue(14)}px;
    color: ${({ type }) => type === 'created' ? '#4EA8DE' : '#8284FA'};
   
    font-weight: bold;
    margin-right: 8px;

`;

export const CounterView = styled.View`
    
    background-color: #333333;
    padding: 2px 8px;
    border-radius: 999px;

`;

export const Value = styled.Text`
    color: #D9D9D9;
    font-size: ${RFValue(12)}px;
    font-weight: 700;
`;