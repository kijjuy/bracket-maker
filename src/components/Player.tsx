import React from "react";

interface PropsName { name: string; }

const Player = (props: PropsName) : JSX.Element => {
    return (
        <div className=" bg-slate-300">
            <h2 className='text-red-300 underline text-md m-4 border-solid border-2 rounded-lg border-sky-500 relative bg-slate-700 hover:bg-slate-400'> {props.name} </h2>
        </div>
    );
}

export default Player;