import React, { useState } from 'react';
//import './App.css';
import BracketSlot from './components/BracketSlot.tsx';



function getBaseLog(x: number, y: number) {
  return Math.log(y) / Math.log(x);
}

const bracketStartTPos = 32;
const bracketStartLPos = 32;

const bracketCurrentTPos = bracketStartTPos;
const bracketCurrentLPos = bracketStartLPos;

//generate a list of 15 names, names 'player1' to player15
const names : string[] = [];
for(let i = 1; i <= 16; i++) {
  names.push(`player${i}`);
}

const names2 : string[] =[];
for(let i = 0; i < names.length/2; i++) {
  names2.push("");
}


const fullBrackets = Math.floor(getBaseLog(2, names.length));

function App() {

  const [data, setData] = useState("abc");

  function handleDataChange(eventItem : string) {
    setData(eventItem);
    console.log(`Click registered with data: ${eventItem}`);
  }

  const [content, setContent] = useState("Click a player to start");
  
  function changeContent(newContent : string) {
    setContent(newContent);
  }

 
  //final content return
  return (
    <div className='flex bg-gray-800'>
      <div className={`left-${bracketCurrentLPos} top-${bracketCurrentTPos} flex-shrink w-72`}>
        <BracketSlot name="n/a" index={0} onDataChange={handleDataChange}>
          <BracketSlot name="n/a" index={1} onDataChange={handleDataChange} >
            <BracketSlot name="Player1" index={3} onDataChange={handleDataChange} />
            <BracketSlot name="Player2" index={4} onDataChange={handleDataChange} />
          </BracketSlot>
          <BracketSlot name="n/a" index={2} onDataChange={handleDataChange}>
            <BracketSlot name="Player3" index={5} onDataChange={handleDataChange} />
            <BracketSlot name="Player4" index={6} onDataChange={handleDataChange} />  
          </BracketSlot>
        </BracketSlot>
        
      </div>
        
    </div>
  );
}

export default App;