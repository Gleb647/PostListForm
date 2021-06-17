import React from 'react';
import "./app-header.css"

const AppHeader = ({likedPostsQuantity, allPostsQuantity})=>{
    return (
        <div className = "app-header">
            <h1>Gleb Tkach</h1>
            <h2>{allPostsQuantity}, из которых понравилось {likedPostsQuantity}</h2>
        </div>
    )
}

export default AppHeader;
