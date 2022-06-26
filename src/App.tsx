import React from 'react';
import './App.css';
import {RatingCars} from "./site/RatingCars";
import {ArrayTypeStudents, Students} from "./site/Students";

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
    return (
        <div>
            <div>HelloWorld!</div>
            <Students students={students}/>
            <RatingCars topCars={topCars}/>
        </div>
    );
}

export default App;
