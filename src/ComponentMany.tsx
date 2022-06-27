import React from 'react';
import {moneyArr} from "./App";

type ComponentManyArray = {
    banknots: string,
    value: number,
    number: string,

}

type ComponentManyType = {
    money: ComponentManyArray[],
    currentMoney: ComponentManyArray[],
    callBack: (cash: moneyArr) => void,
}


export const ComponentMany = (props: ComponentManyType) => {
    const onclickFilterMoney = (cash: moneyArr) => {/* cash: moneyArr- передаем данные функции*/
        props.callBack(cash); /*cash- что будем возвращать*/
    }
    return (
        <>
            <ul>
                {props.currentMoney.map((moneyArr, index) => {/*currentMoney - новый отфильтрованнй массив*/
                    return (
                        <li key={index}>
                            <span>{moneyArr.banknots}</span>
                            <span> {moneyArr.value}</span>
                            <span> {moneyArr.number}</span>
                        </li>
                    );
                })}
            </ul>
            <div style={{marginLeft: "35px"}}> {/*- style настраиваем стиль как в css для тега*/}
                <button onClick={() => onclickFilterMoney('All')}>All</button> {/*- две скобки по бокам, значит передаем на верх*/}
                <button onClick={() => onclickFilterMoney('RUBLES')}>Ruble</button>
                <button onClick={() => onclickFilterMoney('Dollars')}>Dollar</button>
            </div>
        </>
    );
}