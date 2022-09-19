import React from 'react'

function CategoryItem({item}) {
  return (
    <div className='item-container'>
            <div  key={item.id} className="img-container">
              <img
                src={item.img}
                alt="category"
                border="0"
              />
            </div>
            <div className="info-container">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button className="button-1">Shopit!</button>
            </div>
          </div>
    
  )
}

export default CategoryItem
