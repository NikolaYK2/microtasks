import React, {useState} from "react";
import {FullInput} from "./FullInput";
import {Button} from "../propsto_input/Button";
import {InputSimply} from "../propsto_input/InputSimply";


export const Input = () => {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ]);
    //функии для InputSimply Button ==============================================
    let [title, setTitle] = useState("");

    const callBackButtonHandler =()=>{
        addMessage(title);
        setTitle("");
    };
    //функции для компоненты FullInput
    //Функция добавления обьекта
    const addMessage = (title:string) => {//title - то что мы запишем в input
        //addMessage - Передаем функцию компоненнте
        let newMessage = {message:title};
        setMessage([newMessage, ...message ]);
    }

    return (
        <div>
            <InputSimply setTitle={setTitle} title={title}/>
            <Button name={"+"} callBack={callBackButtonHandler}/>
            {/*<FullInput addMessage={addMessage}/>*/}
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {message.map((elM, index) => {
                return (
                    <div key={index}>{elM.message}</div>
                );
            })}
        </div>
    );
}