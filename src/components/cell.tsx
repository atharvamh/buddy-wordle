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

    const applyAnimation = (isReverseFlip = false) => {
        if(isReverseFlip){
            return isPosNegOne || isPresenceNegOne ? "none" : "reverse-flip"
        }

        return isPosNegOne || isPresenceNegOne ? "none" : "flip";
    }

    return (
        <div className={`letter-cell ${applyAnimation()}`} style={{ backgroundColor : getBackgroundColor() }}>
            <p className={`${applyAnimation(true)}`}>{ char }</p>
        </div>
    )
}