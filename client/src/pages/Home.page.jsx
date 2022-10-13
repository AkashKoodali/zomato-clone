import React from 'react'
import { useParams } from 'react-router-dom'

//components
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from '../components/Night Life';
import Nutrition from '../components/Nutrition';

//layout
import HomepageLayout from '../layouts/Homepage.layout'

const Home = () => {
  const { type } = useParams();

  return (
    <>
      <div className='my-5 mb-20'>
      {type === 'delivery' && <Delivery/>}
      {type === 'night' && <NightLife/>}
      {type === 'dining' && <Dining/>}
      {type === 'nutri' && <Nutrition/>}
      </div>
    </> 
  )
}

export default HomepageLayout(Home)