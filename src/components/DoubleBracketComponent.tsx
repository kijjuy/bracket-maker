import react, { ChangeEvent, FC, MouseEventHandler } from 'react';
import Player from './Player'

interface PropsNames { 
    name1: string; 
    name2: string;
    index1: number;
    index2: number; 
    spacing: number; 
    onClick : react.MouseEventHandler<HTMLHeadingElement>;
}



const DoubleBracketComponent: FC<PropsNames> = (props) : JSX.Element => {
    // const player1 = <Player name={props.name1} onClick={props.onClick}/>;
    // const player2 = <Player name={props.name2} onClick={props.onClick}/>;
    // if(props.name2 !== "") {
    //     player2 = <Player name={props.name2} />;
    // }
    return (
        <div className={` w-48 m-${props.spacing} bg-slate-300`}>
            {/* {player1}
            {player2}
             */}
        </div>
    );
}
export default DoubleBracketComponent;
