import React from 'react'
import CategoryCard from './CategoryCard'
import cloths from "../assets/cloths.jpg";
import electronics from "../assets/electronics.jpg";
import shoes from "../assets/shoes.jpg";
const CategorySection = () => {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
      <CategoryCard name="Fashion" image={cloths} />

      <CategoryCard name="Electronics" image={electronics} />

      <CategoryCard name="Shoes" image={shoes} />
    </div>
  )
}

export default CategorySection
