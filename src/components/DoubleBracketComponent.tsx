import react, { FC } from 'react';
import Player from './Player'

interface PropsNames { name1: string; name2: string; }

const DoubleBracketComponent: FC<PropsNames> = (props) : JSX.Element => {
    return (
        <div className=' w-48 bg-slate-500'>
            <Player name={props.name1}/>
            <Player name={props.name2}/>
        </div>
    );
}
export default DoubleBracketComponent;
