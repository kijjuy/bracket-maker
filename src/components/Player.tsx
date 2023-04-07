import React from "react";

interface PropsName { name: string; }

const Player = (props: PropsName) : JSX.Element => {
    return (
        <div>
            <h2 className='text-red-300 underline text-xl m-4 border-solid border-2 rounded-lg border-sky-500 relative'> {props.name} </h2>
        </div>
    );
}

export default Player;