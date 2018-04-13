import React from 'react'
import Post from './Post/Post';
import css from './Posts.css';

const posts = () => {
    return (
        <div className={css.Posts}>
            <Post />
            <Post />
        </div>
    );
};

export default posts;