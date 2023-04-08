import React from 'react';
//import './App.css';
import DoubleBracketComponent from './components/DoubleBracketComponent.tsx';
import Player from './components/Player.tsx';
import SingleBracketComponent from './components/SingleBracketComponent.tsx';


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

function makeNamePairs(names: string[], fullBrackets : number) {
  const namePairs: namePair[] = [];
  console.log(2**fullBrackets);
  for(let i = 0; i < 2**fullBrackets; i+= 2) {
    let temp = new namePair(names[i]);
    if(i < names.length - 1) {
      temp.name2 = names[i + 1];
    }
    namePairs.push(temp);
  }

  return namePairs;
}

function makeSingleNames(names: string[], fullBrackets : number) {
  let singleNames : string[] = [];
  for(let i = 2**fullBrackets; i < names.length; i++) {
    singleNames.push(names[i]);
  }
  return singleNames;
}

const bracketStartTPos = 32;
const bracketStartLPos = 32;

const bracketCurrentTPos = bracketStartTPos;
const bracketCurrentLPos = bracketStartLPos;

//generate a list of 15 names, names 'player1' to player15
const names = [];
for(let i = 1; i < 16; i++) {
  names.push(`player${i}`);
}


const fullBrackets = Math.floor(getBaseLog(2, names.length));
const namePairs: namePair[] = makeNamePairs(names, fullBrackets);
const singleNames: string[] = makeSingleNames(names, fullBrackets);

function App() {
  return (
    <div className=''>
      <div className={`relative left-${bracketCurrentLPos} top-${bracketCurrentTPos}`}>
        {namePairs.map((namePair) => (
            <DoubleBracketComponent name1={namePair.name1} name2={namePair.name2}/>
        ))}

        {singleNames.map((name) => (
          <SingleBracketComponent name={name}/>
        ))}
        
      </div>
    </div>
  );
}

export default App;

