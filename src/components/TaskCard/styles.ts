import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 
import { BorderlessButton } from "react-native-gesture-handler";

interface TypeProps {
    isChecked: false | true
}

export const Container = styled.View`
    width: 100%;
    background-color: #262626;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #333333;
    margin-bottom: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const CheckTask = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TaskDescription = styled.Text<TypeProps>`
    font-size: ${RFValue(14)}px;
    color: ${({ isChecked }) => isChecked ? '#808080' : '#F2F2F2'};
    text-decoration: ${({ isChecked }) => isChecked ? 'line-through' : 'none'};
    text-decoration-color: #808080;
    margin-left: 8px;
    width: 80%;
`;

export const DeleteButton = styled(BorderlessButton)``;
export const CheckButton = styled(BorderlessButton)``;

export const TrashIcon = styled(FontAwesome)`
    color: #808080;
    font-size: ${RFValue(24)}px;
`;

export const CheckIcon = styled(MaterialIcons)<TypeProps>`
    color: ${({ isChecked }) => isChecked ? '#5E60CE': '#4EA8DE'};
    font-size: ${RFValue(24)}px;
`;
