import React, {MouseEvent} from "react";
import {ButtonUniversal} from "../components/ButtonUniversal";

export const Button = () => {
    // const myFirsSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hay i Nik");
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hay i Ivan");
    // }
    const onClickHandler = (name: string) => {
        console.log(name)
    }
    const fooOne = (num: MouseEvent<HTMLButtonElement>) => {
//ничег оне передовать, но в консоле должно быть 100200
        console.log(100200);
    }
    const fooTwo = (num: number) => {
//сюда передать цифру 100200, здесь в консоле ничего нет
        console.log(num)
    }

    // =============================Universal button=======================
    const buttonChannelOne = (subscriber?: string, age?: number) => {
        console.log(subscriber, age);
    }
// const buttonChannelTwo = (subscriber: string) => {
//     console.log(subscriber);
//
// }
    const buttonChannelFree = () => {
        console.log('I button stupid');

    }
//===================================================================
    return (
        <div>
            <button onClick={(name) => onClickHandler('Vasa')}>MyYouTubeChane-1</button>
            <button onClick={(name) => onClickHandler("Nik")}>MyYouTubeChane-2</button>
            {/*onClick={} - это событие*/}
            {/*Если на верх нужно передать информацию, должны быть скобки и справа и слева, если
          не нужно ничего передовать наверх то просто функция без скобок(скобки везде или нигде)*/}
            <br/>
            <button onClick={fooOne}>1</button>
            {/*- ссылка на функцию с сообщением*/}
            <button onClick={(num) => fooTwo(100200)}>2</button>
            <br/><br/>
            <ButtonUniversal name="YouTube-Universal-1" callBack={() => buttonChannelOne("Zadral Ivan", 21)}/>
            <ButtonUniversal name="YouTube-Universal-1" callBack={() => buttonChannelOne("Zadral Vasa")}/>
            <ButtonUniversal name="YouTube-Button" callBack={buttonChannelFree}/>
        </div>
    );
}
