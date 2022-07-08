import React, {ChangeEvent, useState} from 'react';

type FullInputType={
    addMessage:(title:string)=>void
}
export const FullInput = (props:FullInputType) => {
//передаем через пропсы функцию addMessage(добавления) кнопке

    let [title, setTitle] = useState("");

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    //функция для собитыя кнопки
    const addMessageHandler = () => {
        props.addMessage(title);//указываем функции какое событие будет у кнопки(событие добавления)
        setTitle("")//вызываем пустого грузчика) что б после ввода в инпуте оставалось пустое место
    }
    return (
        <div>
            <div>
                <input onChange={onChangeInputHandler} value={title}/>
                <button onClick={addMessageHandler}>+</button>{/*//вызываем функцию при нажатии на кнопку*/}
            </div>
        </div>
    );
};

