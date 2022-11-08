import React, { useState, useEffect } from "react";
import MenuCollection from "./MenuCollection";


//redux
import { useDispatch, useSelector } from 'react-redux'
import {getImage} from "../../redux/reducers/image/image.action"


const Menu = () => {
  const [menus, setMenus] = useState([]);

  const dispatch =useDispatch();

  const reduxState = useSelector((globalState)=> globalState.restaurant.selectedRestaurant);

  useEffect(()=>{
    if(reduxState){
      dispatch(getImage(reduxState?.menuImages)).then((data)=>{
        const images =[];
        data.payload.images?.map(({location})=> images.push(location))
        //console.log(images);
        setMenus(images);
      })}
  },[reduxState])


  return (
    <div className="flex flex-wrap gap-3">
      <MenuCollection menuTitle="Menu" pages={menus.length} images={menus} />
    </div>
  );
};

export default Menu;
