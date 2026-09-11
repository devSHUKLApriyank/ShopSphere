import React from 'react'

const CategoryCard = ({name, image}) => {
  return (
    <div>
      <h3>{name}</h3>
      <img className="w-full h-1/2 object-cover" src={image} alt={name} />
    </div>
  )
}

export default CategoryCard
