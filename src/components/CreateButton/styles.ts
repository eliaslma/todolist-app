import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from "react-native-gesture-handler";


export const Container = styled(RectButton)`
    flex-direction: row;
    background-color: #1E6F9F;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-radius: 8px;
    height: 100%;
`;

export const Title = styled.Text`
    color: #F2F2F2;
    font-size: ${RFValue(14)}px;
    font-weight: bold;
`;

export const Icon = styled(Ionicons)`
    color: #F2F2F2;
    font-size: ${RFValue(18)}px;
    margin-left: 4px;
`;