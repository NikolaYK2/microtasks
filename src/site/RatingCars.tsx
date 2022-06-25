import React from 'react';

export type RatingCarsArrayType = {
    manufacturer: string,
    model: string,
}

type RatingCarsTypeProps = {
    topCars: RatingCarsArrayType[],
}
export const RatingCars = (props: RatingCarsTypeProps) => {
    return (
        <table>
            <tbody>
            {props.topCars.map((cars, index) => {
                return (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{cars.manufacturer}</th>
                        <th>{cars.model}</th>
                    </tr>);
            })}
            </tbody>
        </table>

    );
}