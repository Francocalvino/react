import React from 'react';
import './App.css';


/* function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
      </div>
  )
} */

class Helloworld extends React.Component {

state= { 
  show: true
}

  render(){
    if(this.state.show){
      return(
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button>Cambiar estado</button>
        </div>
      )
    } else {
      return <h1>No hay elementos</h1>
    }
  }
}



function App() {
  return (
      <div>
        This is my component: 
        <Helloworld mytext="Asique" subtitle="No"/>
        <Helloworld mytext="Fresco" subtitle="Queda"/> 
        <Helloworld mytext="metele" subtitle="Otra"/>
      </div>
  );
}

export default App;
