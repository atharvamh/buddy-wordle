import { IRowData } from "../interfaces/IRowData";

export const checkWord = (resultWord: string, guessWord: IRowData[]) => {
    const splitResultWord = resultWord.split("");
    const updatedRowMetadata = guessWord.map((x : IRowData, idx : number) => {
        return {
            ...x,
            pos : splitResultWord[idx] === x.char ? 1 : 0,
            presence : resultWord.includes(x.char) ? 1 : 0
        }
    })

    return updatedRowMetadata;
}