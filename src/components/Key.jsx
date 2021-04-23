import {React, UseState} from 'react';
import './Key.css';

export default function Keyboard(props) {
    return (
        <div>
            {
                props.letter == "space" ?
                <button className='keySpace' onClick={() => {props.changeText(" ")}}></button>
                :
                <button className='key' onClick={() => {props.changeText(props.letter)}}>{props.letter}</button>
            }
        </div>
    )
}