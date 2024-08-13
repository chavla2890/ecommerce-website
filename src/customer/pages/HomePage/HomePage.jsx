import React from 'react'
import MainCarosel from '../../components/homeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../data/Men/men_kurta'

function HomePage() {
  return (
    <div>
        <MainCarosel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"men's kurta"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"men's Shoes"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"men's Shirt"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"women's Saree"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"women's Dress"}/>
            
        </div>
    </div>

  )
}

export default HomePage