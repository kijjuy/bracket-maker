import React from 'react';
import logo from './logo.svg';
//import './App.css';
import DoubleBracketComponent from './components/DoubleBracketComponent.tsx';

//generate an array of 8 random names as strings
const names = ['John', 'Paul', 'George', 'Ringo', 'Pete', 'Mike', 'Dave', 'John'];

const bracketStartTPos = 32;
const bracketStartLPos = 32;

const bracketCurrentTPos = bracketStartTPos;
const bracketCurrentLPos = bracketStartLPos;

function App() {
  return (
    <div className=''>
      <div className={`relative left-${bracketCurrentLPos} top-${bracketCurrentTPos}`}>
        <DoubleBracketComponent name1={names[0]} name2={names[1]}/>
        
      </div>
    </div>
  );
}

export default App;
