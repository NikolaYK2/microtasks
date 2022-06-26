import React from "react";

type ButtonUniversalTypeProps = {
    name: string,
    callBack:()=>void,
}

export const ButtonUniversal = (props: ButtonUniversalTypeProps) => {
    const onClickHandler = () => {
        props.callBack();
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
}