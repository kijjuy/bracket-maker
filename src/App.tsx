import React from 'react';
import logo from './logo.svg';
//import './App.css';
import DoubleBracketComponent from './components/DoubleBracketComponent.tsx';


class namePair {
  constructor(name1 : string , name2: string = "") {
      this.name1 = name1;
      this.name2 = name2;
  }

  name1 : string;
  name2 : string;
}

function getBaseLog(x: number, y: number) {
  return Math.log(y) / Math.log(x);
}

function makeNamePairs(names: string[]) {
  const namePairs: namePair[] = [];

  for(let i = 0; i < names.length; i+= 2) {
    let temp = new namePair(names[i]);
    if(i < names.length - 1) {
      temp.name2 = names[i + 1];
    }
    namePairs.push(temp);
  }

  return namePairs;
}

const bracketStartTPos = 32;
const bracketStartLPos = 32;

const bracketCurrentTPos = bracketStartTPos;
const bracketCurrentLPos = bracketStartLPos;

const names = ['John', 'Paul', 'George', 'Ringo', 'Pete', 'Mike', 'Dave', 'John'];

const fullBrackets = Math.floor(getBaseLog(2, names.length));

const namePairs: namePair[] = makeNamePairs(names);

function App() {
  return (
    <div className=''>
      <div className={`relative left-${bracketCurrentLPos} top-${bracketCurrentTPos}`}>
        {namePairs.map((namePair) => (
            <DoubleBracketComponent name1={namePair.name1} name2={namePair.name2}/>
        ))}
        
      </div>
    </div>
  );
}

export default App;

