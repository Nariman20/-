import React from 'react';
import Post from './Post';



const Content = () => {
    return (
        <div className='cont'>
          <Post name='Nariman' age='32'/>
          <Post />
          <Post />
          <Post />  
        </div>
    )
}


export default Content;