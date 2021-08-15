import React, { Component } from 'react';

import './Task.css';

class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '22px',
            color:this.props.task.done ? 'green' : 'red',
            textDecoration: this.props.task.done ? 'line-through' : 'none',
        }
    }


    render() {
        const {task} = this.props;

        return <div /* className="green" */ style={this.StyleCompleted()}>
                {task.title} -
                {task.desciption} -
                {task.done} -
                {task.id}
            <input type="checkbox" />
            <button style={btnDelete}>
                X
            </button>
            
        </div>
    }
}

const btnDelete = {
    fontSize: '8px',
    color: 'green',
    background:'lightblue',
    border:'none',
    padding:'3px 5px',
    borderRadius: '50%',
    float:'right',
}
export default Task;


//se pueden poner propiedades css a travez de className exportando un archivo css y poniendo el nombre en className     o crear una constante con los estilos y poner el nombre de la constante en el Style,      o hacer una funcion que lleve los estilos de css(como esta en la tarea 3) //
