import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'

//components
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from '../components/Night Life';
import Nutrition from '../components/Nutrition';

//redux
import {useDispatch} from 'react-redux';
import {getRestaurant} from '../redux/reducers/restaurant/restaurant.action';

//layout
import HomepageLayout from '../layouts/Homepage.layout'

const Home = () => {
  const { type } = useParams();

  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  },[])

  return (
    <>
      {type === 'delivery' && <Delivery/>}
      <div className='my-5 mb-20'>
      {type === 'night' && <NightLife/>}
      {type === 'dining' && <Dining/>}
      {type === 'nutri' && <Nutrition/>}
      </div>
    </> 
  )
}

export default HomepageLayout(Home)