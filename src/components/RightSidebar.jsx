import React from 'react';



const RightSidebar = () => {

    let newPostElement = React.createRef();

    let addPost = () => {
     let text = newPostElement.current.value;
        alert(text);
    }

    return (
   <div className='right'>
      <textarea ref={newPostElement}></textarea>
     <button onClick={addPost}>Мой Пост</button>
    
   </div>
    )
}



export default RightSidebar;