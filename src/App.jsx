import { useState } from "react";
import Toggle from "./components/Toggle";

function App() {
  const [englishMeasure, setEnglishMeasure] = useState({
    feet: "",
    inches: "",
    pounds: "",
  });

  const [metricMeasure, setMetricMeasure] = useState({
    centimeters: "",
    kilograms: "",
  });

  const [isChecked, setIsChecked] = useState(false);

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
      setEnglishMeasure((prev) => ({
        ...prev,
        [targetId]: targetValue,
      }));
    }
  };

  // Prevent typing dot
  const handleKeyDown = (e) => {
    if (e.key === ".") {
      e.preventDefault(); // Prevent typing a dot
    }
  };

  const handleIsChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="min-h-screen h-screen m-0 bg-stone-100">
      <div className="flex h-1/5 justify-center items-center mx-auto">
        <h1 className="text-5xl">Welcome to BMI Calculator</h1>
      </div>
      <div className="flex h-3/5 justify-center items-center mx-auto">
        {/* user input container here */}
        <div className="flex flex-col max-w-sm rounded-lg overflow-hidden shadow-lg bg-orange-200 w-80 h-96">
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
                  <div>
                    <input
                      type="number"
                      id="feet"
                      className="mb-1 w-14 rounded-lg"
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      value={englishMeasure.feet}
                    />
                    <label className="ml-2">Feet</label>
                  </div>
                  <div>
                    <input
                      type="number"
                      id="inches"
                      className="mt-1 w-14 rounded-lg"
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      value={englishMeasure.inches}
                    />
                    <label htmlFor="" className="ml-2">
                      Inches
                    </label>
                  </div>
                </div>
              ) : (
                <div className="w-1/2 flex flex-col ml-6">
                  <div>
                    <input
                      type="number"
                      id="cm"
                      className="mb-1 w-14 rounded-lg"
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      value={englishMeasure.cm}
                    />
                    <label className="ml-2">cm</label>
                  </div>
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
                  <div>
                    <input
                      type="number"
                      id="pounds"
                      className="mb-1 w-14 rounded-lg"
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      value={englishMeasure.pounds}
                    />
                    <label className="ml-2">Pounds</label>
                  </div>
                </div>
              ) : (
                <div className="w-1/2 flex flex-col ml-6">
                  <div>
                    <input
                      type="number"
                      id="kg"
                      className="mb-1 w-14 rounded-lg"
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      value={englishMeasure.kg}
                    />
                    <label className="ml-2">kg</label>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="px-4 pt-4 pb-2 flex justify-center items-center mx-auto">
            <button
              className="inline-block bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-700 border-black border-2
              hover:bg-gray-100"
            >
              Calculate
            </button>
          </div>
        </div>
        {/* bmi number and circle progress bar here */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-orange-200 mx-10 w-80 h-96">
          {/* <img
            className="w-full"
            src="/img/card-top.jpg"
            alt="Sunset in the mountains"
          /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-gray-700 text-base">Circle Progress bar here</p>
          </div>
        </div>
        {/* explanation container here */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-orange-200 w-80 h-96">
          {/* <img
            className="w-full"
            src="/img/card-top.jpg"
            alt="Sunset in the mountains"
          /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">What is BMI?</div>
            <p className="text-gray-700 text-base">Description here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
