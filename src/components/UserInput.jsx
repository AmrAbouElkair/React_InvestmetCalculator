import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UserInput = ({ handleLiftStateUp }) => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  useEffect(() => {
    handleLiftStateUp(userInput);
  }, [userInput, handleLiftStateUp]);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            id="initial-investment"
            value={userInput.initialInvestment}
            onChange={(e) =>
              setUserInput({
                ...userInput,
                initialInvestment: Number(e.target.value),
              })
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            id="annual-investment"
            value={userInput.annualInvestment}
            onChange={(e) =>
              setUserInput({
                ...userInput,
                annualInvestment: Number(e.target.value),
              })
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            id="expected-return"
            onChange={(e) =>
              setUserInput({
                ...userInput,
                expectedReturn: Number(e.target.value),
              })
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            id="duration"
            onChange={(e) =>
              setUserInput({ ...userInput, duration: Number(e.target.value) })
            }
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
