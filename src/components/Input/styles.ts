import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TextInput`
    flex: 1;
    padding: 16px 16px;
    font-size: ${RFValue(16)}px;
    color: #F2F2F2;
    background-color: #262626;
    border-radius: 8px;
    margin-right: 8px;
    border: 1px solid #0D0D0D;
`;
