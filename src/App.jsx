import { useState } from "react";
import Toggle from "./components/Toggle";
import Input from "./components/Input";
import Card from "./components/Card";
import {
  calculateBMI,
  capitalizeFirstLetter,
  pickColor,
} from "./utils/helpers";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [measurement, setMeasurement] = useState({
    feet: "",
    inches: "",
    pounds: "",
    cm: "",
    kg: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [BMI, setBMI] = useState(0);
  const [indication, setIndication] = useState({
    status: "",
    color: "",
  });

  // handle input fields change
  const handleChange = (e) => {
    const targetId = e.target.id;
    const targetValue = e.target.value;
    const numberLimit = {
      feet: 1,
      inches: 2,
      pounds: 3,
      cm: 3,
      kg: 3,
    };

    const regex = new RegExp(`^[0-9]{0,${numberLimit[targetId]}}$`);

    if (targetValue === "" || regex.test(targetValue)) {
      setMeasurement((prev) => ({
        ...prev,
        [targetId]: targetValue,
      }));
    }
  };

  // Prevent typing dot
  const handleKeyDown = (e) => {
    if (e.key === ".") {
      e.preventDefault();
    }
  };

  const handleIsChecked = () => {
    setIsChecked(!isChecked);
    setMeasurement({
      feet: "",
      inches: "",
      pounds: "",
      cm: "",
      kg: "",
    });
  };

  const handleSubmit = () => {
    const BMI = calculateBMI(measurement, isChecked);
    const status = pickColor(BMI);

    setBMI(BMI);
    setIndication({
      status: status.status,
      color: status.color,
    });
  };

  return (
    <div className="min-h-screen h-screen m-0 bg-stone-100">
      <div className="flex h-1/5 justify-center items-center mx-auto">
        <h1 className="text-5xl">Welcome to BMI Calculator</h1>
      </div>
      <div className="flex h-3/5 justify-center items-center mx-auto">
        {/* user input card */}
        <Card className="flex flex-col">
          {/* toggle container */}
          <Toggle handleOnChange={handleIsChecked} />
          {/* main user input section */}
          <div className="px-4 py-4 grow flex flex-col justify-evenly">
            {/* height section */}
            <div className="flex justify-between mb-2">
              <div className="w-1/2 ml-6 text-xl">
                <span>Height: </span>
              </div>
              {/* unit section */}
              {!isChecked ? (
                <div className="w-1/2 flex flex-col ml-6">
                  <Input
                    id="feet"
                    label="Feet"
                    value={measurement.feet}
                    handleOnChange={handleChange}
                    handleOnKeyDown={handleKeyDown}
                  />
                  <Input
                    id="inches"
                    label="Inches"
                    value={measurement.inches}
                    handleOnChange={handleChange}
                    handleOnKeyDown={handleKeyDown}
                  />
                </div>
              ) : (
                <div className="w-1/2 flex flex-col ml-6">
                  <Input
                    id="cm"
                    label="cm"
                    value={measurement.cm}
                    handleOnChange={handleChange}
                    handleOnKeyDown={handleKeyDown}
                  />
                </div>
              )}
            </div>
            {/* weight section */}
            <div className="flex justify-between">
              <div className="w-1/2 ml-6 text-xl">
                <span>Weight: </span>
              </div>
              {/* unit section */}
              {!isChecked ? (
                <div className="w-1/2 flex flex-col ml-6">
                  <Input
                    id="pounds"
                    label="Pounds"
                    value={measurement.pounds}
                    handleOnChange={handleChange}
                    handleOnKeyDown={handleKeyDown}
                  />
                </div>
              ) : (
                <div className="w-1/2 flex flex-col ml-6">
                  <Input
                    id="kg"
                    label="kg"
                    value={measurement.kg}
                    handleOnChange={handleChange}
                    handleOnKeyDown={handleKeyDown}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="px-4 pt-4 pb-2 flex justify-center items-center mx-auto">
            <button
              className="inline-block bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-700 border-black border-2
              hover:bg-gray-100"
              onClick={handleSubmit}
            >
              Calculate
            </button>
          </div>
        </Card>
        {/* bmi number and circle progress bar card */}
        <Card className="mx-10 flex flex-col">
          <div className="px-6 py-4 justify-center items-center mx-auto flex flex-col">
            <div className="font-bold text-xl mb-2">
              <span>Result</span>
            </div>
          </div>
          <div className="px-6 py-4 justify-center items-center mx-auto h-1/2 grow">
            <ProgressBar BMI={BMI} indication={indication} />
          </div>
          <div className="px-6 py-4 justify-center items-center mx-auto flex flex-col">
            <div className="font-bold text-xl mb-2">
              <span>{capitalizeFirstLetter(indication.status)}</span>
            </div>
          </div>
        </Card>
        {/* explanation card */}
        <Card>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">What is BMI?</div>
            <p className="text-gray-700 text-base mb-2">
              BMI is an inexpensive and easy screening method for weight
              category—underweight, healthy weight, overweight, and obesity. BMI
              does not measure body fat directly, but BMI is moderately
              correlated with more direct measures of body fat. Furthermore, BMI
              appears to be as strongly correlated with various metabolic and
              disease outcome as are these more direct measures of body fatness.
            </p>
            <p>
              Source:{" "}
              <a
                href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html"
                className="text-blue-600 underline"
                target="_blank"
                rel="noreferrer"
              >
                CDC
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
