import React, {Component} from 'react';
import "./post-list-item.css"


export default class ListItem extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     }

    //     this.onImportant = () =>{
    //         this.setState(state => ({
    //             important: !state.important
    //         }))
    //     }

    //     this.onLike = () =>{
    //         this.setState(state => ({
    //             like: !state.like
    //         }))
    //     }
    // }


    render(){
        const {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important){
            classNames += ' important';
        }

        if (like){
            classNames += ' like';
        }
        return(
            <div className = {classNames}>
            <span className = "app-list-item-label"
            onClick = {onToggleLike}>
                {label}
            </span>
            <div className = "d-flex justify-content-center align-items-center">
                <button className = "btn-star btn-sm" onClick = {onToggleImportant}>
                    <i className = "fa fa-star"></i>
                </button>
                <button className = "btn-trash btn-sm"
                onClick = {onDelete}>
                    <i className = "fa fa-trash"></i>
                </button>
                <i className = "fa fa-heart"></i>
            </div>
        </div>
        )
    }
}
