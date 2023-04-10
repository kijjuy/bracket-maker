import React, { useState } from 'react';
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

// function makeSecondLayerBracket(numNames : number, handleClick : React.MouseEventHandler<HTMLHeadingElement>) {
//   let secondLayerBracket : JSX.Element[] = [];
//   for(let i = 0; i < numNames; i++) {
//     secondLayerBracket.push(<DoubleBracketComponent name1="" name2="" spacing={16} onClick={handleClick}/>);
//   }
//   return secondLayerBracket;
// }


const bracketStartTPos = 32;
const bracketStartLPos = 32;

const bracketCurrentTPos = bracketStartTPos;
const bracketCurrentLPos = bracketStartLPos;

//generate a list of 15 names, names 'player1' to player15
const names : string[] = [];
for(let i = 1; i < 16; i++) {
  names.push(`player${i}`);
}


const fullBrackets = Math.floor(getBaseLog(2, names.length));
const namePairs: namePair[] = makeNamePairs(names, fullBrackets);
const singleNames: string[] = makeSingleNames(names, fullBrackets);

function App() {
  let players = makePlayers(names);
  const [data, setData] = useState(0);

  function handleDataChange(newDataKey : number) {
    setData(newDataKey);
    console.log(`Click registered with data: ${names[newDataKey]}`);
  }

  function makePlayers(names: string[]) {
    let players : JSX.Element[] = [];
    for(let i = 0; i < names.length; i+=2) {
      
      players.push(
        <div className='w-48 m-8 bg-slate-300'>
          <Player name={names[i]} index={i} onDataChange={handleDataChange}/>
          <Player name={i+1 < names.length ? names[i+1] : ""} index={i+1} onDataChange={handleDataChange}/>
        </div>
      )
    }
    return players;
  }

  return (
    <div className='flex'>
      <div className={`left-${bracketCurrentLPos} top-${bracketCurrentTPos} flex-shrink w-72`}>
        {players}

        {/* {namePairs.map((namePair, index) => (
            <DoubleBracketComponent name1={namePair.name1} name2={namePair.name2} index1={} spacing={8} onClick={handleClick}/>
        ))}

        {singleNames.map((name) => (
          <SingleBracketComponent name={name} onClick={() => handlePlayerClick(index, namePair.name1)}/>
        ))} */}
      </div>
      <div className='flex-shrink w-72 bg-slate-500'>
        <div className='mt-20'>
          {/* {makeSecondLayerBracket(singleNames.length, handlePlayerClick(index, text))} */}
        </div>
      </div>
      <div className='flex-shrink w-72'>
        asd2
      </div>
        
    </div>
  );
}

export default App;