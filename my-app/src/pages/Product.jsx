import React from 'react'
import Navbar from '../components/Navbar'

export default function Product({item}) {
  return (
    <>
      <Navbar/>
      <div className='p-container'>
      <div className="img-container">
      <img src="https://i.ibb.co/4NvyRz2/pexels-gift-habeshaw-2919734.jpg" alt="pexels-gift-habeshaw-2919734" border="0" />
        </div>
            <div className="info-container">
              <h1 className='title'>hello</h1>
              <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores impedit ad sit natus! Possimus in molestiae rerum quis impedit fugiat sint aliquam et! Eligendi harum laborum aperiam explicabo aut quasi.</p>
              <b className='price'>499.99</b>
              <button className="button-1">Shopit!</button>
            </div>
      </div>
    </>
  )
}
