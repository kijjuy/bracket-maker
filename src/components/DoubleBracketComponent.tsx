import react, { FC } from 'react';
import Player from './Player'

interface PropsNames { name1: string; name2: string; }



const DoubleBracketComponent: FC<PropsNames> = (props) : JSX.Element => {
    const player1 = <Player name={props.name1} />;
    let player2;
    if(props.name2 !== "") {
        player2 = <Player name={props.name2} />;
    }
    return (
        <div className=' w-48 m-8 bg-slate-300'>
            {player1}
            {player2}
            
        </div>
    );
}
export default DoubleBracketComponent;
