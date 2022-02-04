import React from 'react';
import './App.css';
import InputField from "../components/InputFeild"



const App: React.FC = () => {
  return (
    <>
    <div className="App">
      <span className="head">To-Do!</span>
      <InputFeild />
    </div>
    </>
  );
}

export default App;
