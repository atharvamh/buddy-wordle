import { useEffect, useCallback, useState } from 'react';
import './App.css';
import Header from './components/header';
import WordGrid from './components/wordGrid';
import { maxGuesses, maxRowLength, rowData } from './constants/appconstants';
import { IRowData } from './interfaces/IRowData';
import { checkWord } from './utils/helper';
import Modal from "react-modal";

function App() {

  const wordToGuess = "ENTER";
  
  const [currentRow, setCurrentRow] = useState<number>(1);
  const [isCorrectGuess, setIsCorrectGuess] = useState<boolean>(false);
  const [openStatsModal, setOpenStatsModal] = useState<boolean>(false);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [attempt, setAttempt] = useState<number>(0);

  /* 
    refer https://stackoverflow.com/questions/62855791/problem-with-assigning-value-to-a-2d-array-javascript-node-js 
    to understand the initialization of gridData 
  */
  const [gridData, setGridData] = useState<Array<IRowData[]>>(Array.from(Array(maxGuesses), 
    () => Array(maxRowLength).fill(null).map(() => ( {...rowData})))
  );

  const handleKeyPress = useCallback((event: { key: string; keyCode: number; }) => {
    if(!isCorrectGuess){
      const tempGridData = [...gridData];

      if((event.key === "Backspace" || event.keyCode === 8) && currentCharIndex > 0){
        tempGridData[currentRow - 1][currentCharIndex - 1].char = "";
        setCurrentCharIndex((prev) => prev - 1);
      }

      else if((event.key === "Enter" || event.keyCode === 13)){
        const activeRow = tempGridData[currentRow - 1]?.filter(x => x.char !== "");
        if(activeRow.length === maxRowLength && currentRow <= maxGuesses){
          tempGridData[currentRow - 1] = checkWord(wordToGuess, activeRow);
          const correctlyGuessedPos = tempGridData[currentRow - 1].map(x => x.pos).filter(x => x === 1);
          const correctGuess = correctlyGuessedPos.length === maxRowLength;
          setIsCorrectGuess(correctGuess);
          setOpenStatsModal(correctGuess);
          setCurrentRow((prev) => prev + 1);
          setAttempt((prev) => prev + 1);
          setCurrentCharIndex(0); // reset currentCharIndex on row change
        }
      }

      else{
        const input = String.fromCharCode(event.keyCode);
        const regexAlpha = /[a-zA-Z]/;

        if(regexAlpha.test(input)){
          if(currentCharIndex < maxRowLength){
            tempGridData[currentRow - 1][currentCharIndex].char = input;
            setCurrentCharIndex((prev) => prev + 1);
          }
        }
      }

      setGridData(tempGridData);
    }
  },[currentRow, currentCharIndex, gridData, isCorrectGuess]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);

    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    }
  },[handleKeyPress]);

  return (
    <div className="app-container">
      <Header attempt={attempt}/>
      <WordGrid gridData={gridData} />
      <Modal 
        isOpen={openStatsModal}
        closeTimeoutMS={500}
        onRequestClose={() => setOpenStatsModal(false)}
      >
        <div style={{ alignItems: "center", justifyContent : "center", color: "#000", display: "flex", flexDirection: "column" }}>
          <h1>Statistics</h1>
          <h2 style={{ color : "#538d4e" }}>Congratulations! You have successfully solved the wordle on Attempt {attempt}</h2>
        </div>
      </Modal>
    </div>
  )
}

export default App
