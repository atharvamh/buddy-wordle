import { keyboardRow1, keyboardRow2, keyboardRow3 } from "../constants/appconstants";

interface IKeyboardLayout{
    handleKeyPress: (event : {key : string , keyCode : number }) => void;
}


export default function KeyBoardLayout({ handleKeyPress } : IKeyboardLayout){
    return (
        <div className="keyboard-layout">
            <div className="keyboard-row">
                {
                    keyboardRow1.map((item) => 
                        <div className="key" key={`key-${crypto.randomUUID()}`} onClick={() => handleKeyPress(item)}>{item.key}</div>
                    )
                }
            </div>
            <div className="keyboard-row">
                {
                    keyboardRow2.map((item) => 
                        <div className="key" key={`key-${crypto.randomUUID()}`} onClick={() => handleKeyPress(item)}>{item.key}</div>
                    )
                }
            </div>
            <div className="keyboard-row">
                {
                    keyboardRow3.map((item) => 
                        <div className="key" key={`key-${crypto.randomUUID()}`} onClick={() => handleKeyPress(item)}>{item.key}</div>
                    )
                }
            </div>
        </div>
    )
}