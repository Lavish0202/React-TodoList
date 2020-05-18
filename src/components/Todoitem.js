import React, { Component } from 'react'
import Proptypes from 'prop-types'

export class Todoitem extends Component {
   getStyle=() =>{
       return{
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dashed' ,
         textDecoration: this.props.todo.completed ? 'line-through'  : 'none'
       }
   }
   
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p> 
                    <input type="checkbox"  onChange={this.props.markComplete.bind(this,id)} />
                    {' '}
                    {title } 
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}
const btnStyle={
    background: '#3234a8',
    color:'#fff',
    border:'none',
    borderRadius: '50%',
    padding: '5px 10px',
    float: 'right',
    cursor: 'pointer'

}

Todoitem.prototypes={
    todo: Proptypes.object.isRequired,
    markComplete: Proptypes.func.isRequired,
    delTodo: Proptypes.func.isRequired
}


export default Todoitem
