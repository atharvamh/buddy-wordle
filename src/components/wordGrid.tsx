import { IRowData } from "../interfaces/IRowData";
import CellRow from "./cellRow";

interface IWordGrid{
    gridData: Array<IRowData[]>;
}

export default function WordGrid({ gridData } : IWordGrid){

    return (
        <div className="grid-container">
            {
                gridData?.map((rowdata) => 
                    <CellRow rowData={rowdata} key={`row-${crypto.randomUUID()}`} />
                )
            }
        </div>
    )
}