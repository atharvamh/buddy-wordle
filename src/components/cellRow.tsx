import { IRowData } from "../interfaces/IRowData";
import Cell from "./cell";

interface ICellRow{
    rowData: IRowData[];
}

export default function CellRow({ rowData } : ICellRow) {

    return (
        <div className="row-container">
            {
                rowData?.map((data : IRowData) => 
                    <Cell cellData={data} />
                )
            }
        </div>
    )
}