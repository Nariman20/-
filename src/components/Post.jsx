import React, { Component } from 'react';


class Post extends Component {
    render() {
        return (
            <div className='post'>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className='post__name'>
                    Название оглавление
               </div>
                <div className='post__descr'>
                    Данная продукция являеться изделием наивышего класса,
                      что подтвержденно множеством сертификатов качества.
               </div>
            </div>
        )
    }
}

export default Post;