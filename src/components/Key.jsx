import {React, UseState} from 'react';
import './Key.css';

export default function Keyboard(props) {
    return (
        <div>
            {
                props.letter == "space" ?
                <button className='key keySpace' onClick={() => {props.changeText("\xa0")}}></button>
                :
                <button className='key' onClick={() => {props.changeText(props.letter)}}>{props.letter}</button>
            }
        </div>
    )
}