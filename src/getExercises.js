import React from 'react';
import plank from './frontend/fitnessimages/plank';
import pushUp from './frontend/fitnessimages/push-up';
import sitUp from './frontend/fitnessimages/sit-up';
import starJump from './frontend/fitnessimages/star-jump';
import yoga from './frontend/fitnessimages/yoga';
import chairPushUp from './frontend/fitnessimages/chair-push-up';

let exercises = [
    {
        name: "Plank",
        alt: "Plank",
        instructions: "Perform the set: plank for 30 seconds, rest for 30 seconds. Repeat the set 5 times",
        lengthOfExercise: "5 Min",
        picture: src = { plank }
    },
    {
        name: "Push-Ups",
        alt: "Push-Ups",
        instructions: "",
        lengthOfExercise: "",
        picture: src = { pushUp }
    },
    {
        name: "Sit-Ups",
        alt: "Sit-Ups",
        instructions: "Perform 10 sit-ups, rest, then perform 20 sit-ups, rest for 30 seconds, then perform 30 sit-ups",
        lengthOfExercise: "5 Min",
        picture: src = { sitUp }
    },
    {
        name: "Star-Jumps",
        alt: "Star-Jumps",
        instructions: "",
        lengthOfExercise: "3 Min",
        picture: src = { starJump }
    },
    {
        name: "Yoga",
        alt: "Star-Jumps",
        instructions: "Follow along on this YouTube video",
        lengthOfExercise: "10 Min",
        picture: src = { yoga }
    },
    {
        name: "Squats",
        alt: "Squats",
        instructions: "Do 20 squats, take a 30 seconds break, and do 10 more squats",
        lengthOfExercise: "3 Min",
        picture: src = { sitUp }
    },
    {
        name: "Chair Push-Ups",
        alt: "Chair Push-Ups",
        instructions: "Do 30 chair push-ups, then rest for 30 seconds and do 30 more chair push-ups",
        lengthOfExercise: "3 Min",
        picture: src = { chairPushUp }
    }
];
export default function GetExercises() {
    return (
        <div>
        {exercises}
        </div>
    );
};