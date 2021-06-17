import AppHeader from './app-header'
import SearchPanel from './search-panel'
import './App.css';
import Filter from './post-status-filter';
import List from './post-list'
import PostAdd from './post-add-form'
import React, {Component} from 'react'

export default class APP extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : [  
        {label: "Going to learn react", important: true, like: false, id : 1},
        {label: "That's so good", important: false, like: false, id : 2},
        {label: "I need a break", important: false, like: false, id : 3}
      ],
      maxId:4,
      term: '',
      filter: 'all'
    }

    this.deleteFromData = (id) =>{
      const {data} = this.state;
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data.slice(0, index),...data.slice(index + 1)];
      this.setState({      
        data : newData
      })
    }

    this.addData = (body) =>{
      let {maxId} = this.state;
      const newElement = {
        label: body, important: false, like: false, id : maxId++ 
      }
      this.setState(({data}) => {
        const newData = [...data, newElement];
        return{
          data: newData
        }
      })
    }

    this.onToggleImportant = (id) =>{
      const {data} = this.state;
      const index = data.findIndex(elem => elem.id === id);
      const oldElement = data[index];
      const newElement = {...oldElement, important: !oldElement.important};
      const newData = [...data.slice(0, index),newElement,...data.slice(index + 1)];
      this.setState({
        data: newData
      })
    }

    this.onToggleLike = (id) =>{
      const {data} = this.state;
      const index = data.findIndex(elem => elem.id === id);
      const oldElement = data[index];
      const newElement = {...oldElement, like: !oldElement.like};
      const newData = [...data.slice(0, index),newElement,...data.slice(index + 1)];
      this.setState({
        data: newData
      })
    }

    this.onUpdateSearch = (term) =>{
      this.setState({term})
    }

    this.onFilterSelect = (filter) =>{
      this.setState({filter})
    }
  }

  filterPosts(items, filter){
    if (filter === 'filterByLike'){
      return items.filter(item => item.like)
    }
    return items
  }

  searchPost(items, term){
    if (term.length === 0){
      return items
    }

    return items.filter((item)=>{
      return item.label.indexOf(term) > -1
    });
  }

  // addAppHeight(data){
  //   if (data.length >= 3){
  //     const app = document.querySelector('.App');
  //     let previousHeight = +app.style.height.slice(0,-2);
  //     previousHeight += 35;
  //     app.style.height = +previousHeight + "px";
  //   }
  // }

  
  render(){
    const {data, term, filter} = this.state;
    const likedPostsQuantity = data.filter(item => item.like).length;
    const allPostsQuantity = data.length;

    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

    return (
      <div className="App">
        <AppHeader
        likedPostsQuantity = {likedPostsQuantity}
        allPostsQuantity = {allPostsQuantity}/>
        <div className = "search-panel">
          <SearchPanel
          onUpdateSearch = {this.onUpdateSearch}/>
          <Filter
          onFilterSelect = {this.onFilterSelect}/>
        </div>
        <List posts = {visiblePosts}
        onDelete = {(id) => this.deleteFromData(id)}
        onToggleImportant = {this.onToggleImportant}
        onToggleLike = {this.onToggleLike}/>
        <PostAdd
        onAdd = {this.addData}/>
      </div>
    )
  }
}


