import React, {Component} from 'react';
import Post from './Post';

class Posts extends Component {
    render () {
        return (
            <div className='left'>
                <Post alt='nature' src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-i4di01t9mon9gdb6f8n0evlud7-20181208232004.Medi.jpeg'/>
            </div>
        )
    }
}

export default Posts;