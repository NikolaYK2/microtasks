import React from "react";

type ButtonUniversalTypeProps = {
    name: string,
    callBack:()=>void,
}

export const ButtonUniversal = (props: ButtonUniversalTypeProps) => { /*- компонента*/
    const onClickHandler = () => { /*- костяк для кнопки*/
        props.callBack();
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
}