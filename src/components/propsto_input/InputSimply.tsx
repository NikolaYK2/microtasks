import React, {ChangeEvent} from 'react';


type InputSimplyType={
    title:string
    setTitle:(title:string)=>void
}


export const InputSimply = (props: InputSimplyType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    }

    return (
        <>
            <input onChange={onChangeInputHandler} value={props.title}></input>
        </>
    );
};

