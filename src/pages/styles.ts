
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    flex: 1;
    background-color: #1A1A1A;

`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(200)}px;
    background-color: #0D0D0D;
    justify-content: center;
    align-items: center;
`;

export const InputContainer = styled.View`
    padding: 0 16px;
    position: absolute;
    width: 100%;
    margin-top: ${RFValue(173)}px;
`;






