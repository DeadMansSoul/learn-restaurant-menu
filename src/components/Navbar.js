import React, {useState} from 'react';

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
        <nav className="navbar">
            <div className='btn-group'>
              {menuList.map((currentElement, index)=>{
                return (
                  <>
                  <button key={index}
                    className='btn-group__item' 
                    onClick={()=>filterItem(currentElement)}>
                    {currentElement}
                  </button>
                  </>
                );
              })}
            </div>
        </nav>
    </>
  )
}

export default Navbar;