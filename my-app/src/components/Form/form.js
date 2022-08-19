/* eslint-disable no-unused-expressions */

import React from "react";
import { useState, useEffect } from "react";
import "./form.css";
import List from "../List/List";
import Details from "../Details/Details";
// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

let global_id;
const url1 = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

export default function Form() {  // КОМПОНЕНТ Формы
  
  const [info, setInfo] = useState([]);
  const [itemsObj, setItemsObj] = useState([]); // массив объектов, передаваемыех в компонент <List />
  const [id, setId] = useState(''); 
  
  useEffect(() => { // загрузка и отрисовка списка при первоначадьной загрузке страницы
    
    fetch(url1)
      .then((response) => response.json()) // выгрузка списка с сервера
      .then((json) => setItemsObj(json));
    
  }, []);

  useEffect(() => { // загрузка и отрисовка деталей
    const controller = new AbortController();
    const {signal} = controller;
    
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`, {signal})
      .then((response) => response.json())
      .then((json) => setInfo(json));
      
    return () => {
      controller.abort();
    };
  }, [id]);
  
  const handleClick = async evt => {  // ОБРАБОТКА НАЖАТИЯ элемента списка, компонент <List />
    const { target } = evt;
    global_id = target.parentElement.id;
    console.log('choosen ID = ', global_id);   // КОНТРОЛЬНАЯ ТОЧКА
    
    setId(prevId => global_id);
  };

  return (
    <main className="content">
        <div className="form_list">
          <List itemsObj={itemsObj} onClick={handleClick}/>
        </div>
        <div className="form_detail">
          <Details info={info}/>
        </div>
    </main>
  );
};

List.defaultProps = {
  dataArr: []
  };

/*
ShopItemFunc.propTypes = {
  itemArray: PropTypes.arrayOf(UserModel).isRequired
}
*/