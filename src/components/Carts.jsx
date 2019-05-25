import React from 'react';
import './Carts.css';


const Carts = () => {
    return (
        <div className= 'cart'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwnFsGeiBhMQD0oZDeNm47Qw5LK1LJ2-KBn7EdX_O1Rgp7j5SoA' />
          <div className='cartName'>
              Сендвич
          </div>
          <div>
            Краткое описание продукта 
          </div>
        </div>
    )
}

export default Carts;