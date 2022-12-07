import React from "react";
import { 
    Container, 
    TaskDescription, 
    DeleteButton, 
    TrashIcon,
    CheckTask,
    CheckIcon,
    CheckButton

} from "./styles"

const icon = {
    true: 'check-circle',
    false: 'radio-button-unchecked'
}

export function TaskCard({ label, id, deleteFunction, checkFunction, isChecked}){

    return(
        <Container>
            <CheckTask>
                <CheckButton onPress={() =>{checkFunction(id)}}>
                    <CheckIcon name={icon[isChecked]} isChecked={isChecked}/>
                </CheckButton>
                <TaskDescription isChecked={isChecked}>{label}</TaskDescription>
            </CheckTask>
            <DeleteButton onPress={() => { deleteFunction(id)}}>
                <TrashIcon name="trash"/>
            </DeleteButton>
        </Container>
    )

}