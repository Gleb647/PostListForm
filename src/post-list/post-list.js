import React from 'react';
import ListItem from '../post-list-item';
import "./post-list.css";

const List = ({posts, onDelete, onToggleImportant, onToggleLike}) =>{

    const elements = posts.map((item) =>{
        const {id, ...otherProps} = item;
        return(
            <li key = {id}clasName = "list-group-items">
                <ListItem 
                {...otherProps}
                onDelete = {()=> onDelete(id)}
                onToggleImportant = {() => onToggleImportant(id)}
                onToggleLike = {() => onToggleLike(id)}/>
            </li>
        )
    })

    return(
        <ul type = "none" className = "app-back-list list-group-items">
            {elements}
        </ul>
    )
}

export default List;