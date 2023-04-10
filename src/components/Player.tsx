import React, { ChangeEvent, MouseEventHandler } from "react";

interface PropsName {
     name: string;
     onDataChange: (newDataKey: number) => void;
     index: number;
}
const Player = (props: PropsName) : JSX.Element => {
    function handleClick() {
        props.onDataChange(props.index);
    }
    return (
        <div className=" bg-slate-300">
            <h2 className='text-red-300 underline text-md m-4 border-solid border-2 rounded-lg border-sky-500 h-8 relative bg-slate-700 hover:bg-slate-400'
            onClick={handleClick}> {props.name} </h2>
        </div>
    );
}

export default Player;