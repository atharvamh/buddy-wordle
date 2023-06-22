import { IRowData } from "../interfaces/IRowData";

interface ICell {
    cellData: IRowData;
}

export default function Cell({ cellData } : ICell){

    const { char, pos, presence } = cellData;

    const isPosNegOne = pos === -1;
    const isPresenceNegOne = presence === -1;
    const isPosCorrect = pos === 1;
    const hasPresence = presence === 1;

    const getBackgroundColor = () => {
        return isPosNegOne || isPresenceNegOne ? "transparent" : isPosCorrect ? "#538d4e" : hasPresence ? "#b59f3b" : "#3a3a3c"
    }

    return (
        <div 
            className={`letter-cell ${isPosNegOne || isPresenceNegOne ? "none" : "flip"}`} 
            style={{ backgroundColor : getBackgroundColor() }}
        >
            <p className={`${isPosNegOne || isPresenceNegOne ? "none" : "reverse-flip"}`}>
                { char }
            </p>
        </div>
    )
}