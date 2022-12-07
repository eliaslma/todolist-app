import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export const Container = styled(GestureHandlerRootView)`
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
    flex-direction: row;
    padding: 0 16px;
    position: absolute;
    width: 100%;
    margin-top: ${RFValue(173)}px;
    align-items: center;
`;

export const TaskContainer = styled.View`
    flex: 1;
    margin-top: 40px;
`;

export const TaskHeader = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 16px;
    
`;

export const Tasks = styled.View`
    flex: 1;
    padding: 20px 16px 0px;

`;









