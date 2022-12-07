import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 32px;
`;


export const Separator = styled.View`
    height: 1px;
    background-color: #333333;
    margin-top: 16px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: bold;
    color: #808080;
    margin-top: 16px;
`;

export const Description = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #808080;
`;

