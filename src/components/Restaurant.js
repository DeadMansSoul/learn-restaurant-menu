import React, { useState } from 'react';
import Menu from '../menu';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import "./style.css";

const uniqueList =[
  //new Set from ES2019 gives unique values
  //[] gives an array of resulting unique list
  //... spread operator makes a single item list and thats then made into array of individual items
  ...new Set(
    Menu.map((curreElem)=>{
      return curreElem.category;
    })
  ), 
  "All",
];
// console.log(uniqueList);
const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  
  const filterItem = (category) => {
    const updatedMenu = Menu.filter((curreElem)=>{
        return curreElem.category === category;
    });
    // setMenuData(updatedMenu);
    return category==="All" ? setMenuData(Menu) : setMenuData(updatedMenu);
  }

  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant