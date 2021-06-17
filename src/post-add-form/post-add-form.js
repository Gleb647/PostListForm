import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            txt: ''
        }

        this.onValueChange = (e) =>{
            this.setState({
                txt: e.target.value
            })
        }

        this.onSubmit = (e) =>{
            e.preventDefault();
            this.props.onAdd(this.state.txt);
            this.setState({
                txt: ''
            })
        }
    }

    render(){
        const {txt} = this.state;
        return(
            <form  
            className = "add-form"
            onSubmit = {this.onSubmit}>
                <input 
                placeholder = "О чём вы сейчас думаете?"
                onChange = {this.onValueChange}
                className = "form-control add-input flex-row"
                value = {txt}/>
                <button>Добавить</button>
            </form>
        )
    }
}
  

