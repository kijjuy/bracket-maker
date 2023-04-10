import React from "react";
import Player from "./Player";

interface PropsNames { name: string; onClick : React.MouseEventHandler<HTMLHeadingElement>; }

function SingleBracketComponent(props: PropsNames) {
  return (
    <div className="w-48 m-8 bg-slate-300">
      {/* <Player name={props.name} onClick={props.clearonClick} /> */}
    </div>
  );
}

export default SingleBracketComponent;