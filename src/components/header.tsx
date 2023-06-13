import { maxGuesses } from "../constants/appconstants";
import logo from "../assets/react-wordle.svg";

interface IHeader{
    attempt: number;
}

export default function Header({ attempt } : IHeader){
    return (
        <div className="header">
            <p> <img src={logo} width={"auto"} height={50}/> </p>
            <p className="header-title">REACT WORDLE (<span>ATTEMPT : { attempt } / { maxGuesses }</span>)</p>
        </div>
    )
}