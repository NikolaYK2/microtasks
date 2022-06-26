import React, {useState} from 'react';
import './App.css';
import {RatingCars} from "./site/RatingCars";
import {ArrayTypeStudents, Students} from "./site/Students";
import {Button} from "./site/Button";

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
// ===================== =======================================


function App() {

    // let a = 1;
    let[a, setA] = useState(1)//- можно работать с числами, строками, обьектами и т. д.
    //a - переменная(состояние), кторая лежит в функции setA
    //a - товар
    // setA - грузик
    const onClickHandler =()=> {
        // - для того что бы произошла отрисовка нужно вызвать функцию setA
        setA(++a); //-внутри функции делаем то что нужно на данном этапе
    }
    const onClickHandlerReset =()=> {
        // - для того что бы произошла отрисовка нужно вызвать функцию setA
        setA(a = 0); //-внутри функции делаем то что нужно на данном этапе
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
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerReset}>Reset</button>
        </div>
    );
}

export default App;
