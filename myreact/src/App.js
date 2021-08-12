import './App.css';


function Helloworld() {
  return (
    <div id="hello">Hello World</div>
  )
}



function App() {
  return (
    <div>This is my component: <Helloworld/> </div>
  );
}

export default App;
