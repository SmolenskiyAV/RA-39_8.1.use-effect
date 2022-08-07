//import { nanoid } from 'nanoid'
import "./details.css";
import { useState } from "react";

let city;
let company;
let position;
const space =' ';

export default function Details(props) {    // функция отрисовки элемента Detail

  const { info } = props;
  const { name, avatar, details, id } = info;
      
  if (details) {
    city = details.city;
    company = details.company;
    position = details.position;
  };   
  console.dir('catched id: ', id); // КОНТРОЛЬНАЯ ТОЧКА
  console.log('=====================================');
  
  return (
    <div className="details_container" id={id}>
      {details && <div className="task__title">NAME:{space}{name}</div>}
      {details && <img className="task__title" src={avatar} alt={name} />}
      {details && <div className="task__title">City:{space}{city}</div>}
      {details && <div className="task__title">Company:{space}{company}</div>}
      {details && <div className="task__title">Position:{space}{position}</div>}
    </div>
  );
  
}
