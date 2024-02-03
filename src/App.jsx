import { useState } from "react";
import { Header, Result, UserInput } from "./components/index";

function App() {
  const [userInputData, setUserInputData] = useState({});

  const handleLiftStateUp = (userInput) => {
    setUserInputData(userInput);
  };

  const userInputIsValid = userInputData.duration >= 1;

  return (
    <>
      <Header />
      <UserInput handleLiftStateUp={handleLiftStateUp} />
      {!userInputIsValid && (
        <p className="center">Duration must be greater than 0</p>
      )}
      {userInputIsValid && <Result input={userInputData} />}
    </>
  );
}

export default App;
