import React, {useState} from 'react';
import './App.css';
import {RatingCars} from "./site/RatingCars";
import {ArrayTypeStudents, Students} from "./site/Students";
import {Button} from "./site/Button";
import {ComponentMany} from "./ComponentMany";

// ==========================Students=========================
const students: ArrayTypeStudents[] = [
    {id: 1, name: "Vita", age: 30,},
    {id: 2, name: "Nik", age: 30,},
    {id: 3, name: "Vova", age: 33,},
    {id: 4, name: "Denis", age: 32,},
    {id: 5, name: "Grisha", age: 35,},
];
// ===================== Array Rating Auto============================
const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
];

// ===================== Money=======================================
export type moneyArr = "All" | 'RUBLES' | 'Dollars' //- типизируем как бы массив
//======================================================================
function App() {
    /*===============================Кнопки добавления и обнуления=========================*/
    // let a = 1;
    let [a, setA] = useState(1)//- можно работать с числами, строками, обьектами и т. д.
    //a - переменная(состояние), кторая лежит в функции setA
    //a - товар
    // setA - грузик
    const onClickHandler = () => {
        // - для того что бы произошла отрисовка нужно вызвать функцию setA
        setA(++a); //-внутри функции делаем то что нужно на данном этапе
    }
    const onClickHandlerReset = () => {
        // - для того что бы произошла отрисовка нужно вызвать функцию setA
        setA(a = 0); //-внутри функции делаем то что нужно на данном этапе
    }
// ==============================Money=======================================
    const [money, setMoney] = useState([ /*- useState отвечает за массив*/
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLES', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLES', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLES', value: 50, number: ' v1234567890'},
    ]);

    const [filter, setFilter] = useState<moneyArr>("All") /*- локальный стэйт(useState<moneyArr> - как бы присваеваем массиву тип данных)*/
// ======================================================================Money============================
    let currentMoney = money; /*- копируем ссылку массива в переменную*/
    if (filter === "Dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars");
    }
    if (filter === "RUBLES") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLES");
    }
    // ========================FunctionButtonMoney===========================================
    const onClickFilterHandler = (cash: moneyArr) => {
        setFilter(cash);
    }
    return (
        <div>
            <div>HelloWorld!</div>
            <hr/>
            <Students students={students}/>
            <hr/>
            <RatingCars topCars={topCars}/>
            <hr/>
            <Button/>
            <h1>{a}</h1>
            {/*=============================Button+1====================================================*/}
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerReset}>Reset</button>
            <hr/>
            {/*==================================Money================================================*/}
            <ComponentMany money={money} currentMoney={currentMoney} callBack={onClickFilterHandler}/>
            {/*===================================================================================*/}
        </div>
    );
}

export default App;
