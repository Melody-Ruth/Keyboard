import {React, useState} from 'react';
import Key from './Key';
import './Keyboard.css';

export default function Keyboard() {
    const [keyboardStatus, setKeyboardStatus] = useState({
        textBoxText: "",
        capsLock: false
    });
    const { textBoxText, capsLock } = keyboardStatus;
    const changeText = function(letter) {
        if (letter == "backspace") {
            setKeyboardStatus({...keyboardStatus, textBoxText: textBoxText.substring(0,textBoxText.length-1)});
        } else if (letter == "caps lock") {
            setKeyboardStatus({...keyboardStatus, capsLock:!capsLock});
        } else {
            setKeyboardStatus({...keyboardStatus, textBoxText: textBoxText+letter});
        }
    }
    const keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const keysCap = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return (
        <div>
            <div id="keyboardHolder">
                <div id="textBox">
                    <p>{textBoxText}</p>
                </div>
                <div id="keys">
                    {
                    capsLock ?
                    (
                        keysCap.map((currLet, i) => (<Key key={i} letter={currLet} changeText={changeText}/>))
                    )   
                    :
                    (
                        keys.map((currLet, i) => (<Key key={i} letter={currLet} changeText={changeText}/>))
                    )
                }
                <Key letter='caps lock' changeText={changeText}/>
                <Key letter='backspace' changeText={changeText}/>
                <Key letter='space' changeText={changeText}/>
                </div>
            </div>
        </div>
    )
}