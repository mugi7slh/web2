import express from "express";
import {Film} from '../types';

const router = express.Router();

//Films en hardcode

const films: Film[] = [
    {
        id : 1,
        title :'Undisputed',
        director : 'boyka',
        duration : 148,
        budget : 160,
        imageUrl : 'https://exemple.com/undisputed.jpg'
    },
    {
        id : 2,
        title :'Interstellar',
        director : 'Christopher Nolan',
        duration : 150,
        budget : 169,
        imageUrl : 'https://exemple.com/interstellar.jpg'
    },
    {
        id : 3,
        title :'avngers end-game',
        director : 'hulk',
        duration : 225,
        budget : 212,
        imageUrl : 'https://exemple.com/avengers.jpg'

    }
];
let num : number = 0;
router.get("/", (_req, res)=>{
    num++;
    console.log("GET counter / films" + num)
    res.json(films);

});
export default router;
