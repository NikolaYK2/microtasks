import React from 'react';


export type ArrayTypeStudents = {
    id: number,
    name: string,
    age: number,
}
type StudentsTypeProps = {
    students: ArrayTypeStudents[],
}
export const Students = (props: StudentsTypeProps) => {
    return (
        <ul>
            {props.students.map((student) => {
                return (
                    <li key={student.id}>
                        <span>{student.name}</span>
                        <span>{student.age}</span>
                    </li>
                );
            })}
        </ul>
    );
}