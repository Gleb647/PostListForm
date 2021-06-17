import React, {Component} from 'react';
import './post-status-filter.css';

export default class Filter extends Component{
    constructor(props){
        super(props);
        this.buttons = [
            {type: 'all', text: 'Все'},
            {type: 'filterByLike', text: 'Понравилось'}
        ]
    }
    render(){
        const btns = this.buttons.map(({type,text})=>{
            return <button 
            className = "flex-row"
            key = {type} onClick = {()=>this.props.onFilterSelect(type)}>{text}</button>
        })
        return(
            <>
                {btns}
            </>
            )
    }
}
