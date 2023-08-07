const calculateBMI = (measurement, isChecked) => {
  let { feet, inches, pounds, cm, kg } = measurement;

  feet = parseInt(feet, 10);
  inches = parseInt(inches, 10);
  pounds = parseInt(pounds, 10);
  cm = parseInt(cm, 10);
  kg = parseInt(kg, 10);

  let result = 0;
  if (!isChecked) {
    result = calculateEnglish(feet, inches, pounds);
  } else {
    result = calculateMetric(cm, kg);
  }

  result = roundToDecimal(result);
  return result;
};

const calculateEnglish = (feet, inches, pounds) => {
  const result = (pounds / Math.pow(feet * 12 + inches, 2)) * 703;
  return result;
};

const calculateMetric = (cm, kg) => {
  const result = kg / Math.pow(cm / 100, 2);
  return result;
};

const roundToDecimal = (number) => {
  const result = number.toFixed(2);
  return result;
};

const capitalizeFirstLetter = (str) => {
  const result = str.charAt(0).toUpperCase() + str.slice(1);
  return result;
};

const pickColor = (bmi) => {
  let result = {};

  const weightStatus = {
    underweight: { max: 18.5, color: "#fddf47" },
    healthy: { max: 24.99, color: "#4ade80" },
    overweight: { max: 29.99, color: "#fddf47" },
    obesity: { max: Infinity, color: "#ef4444" },
  };

  const status = Object.keys(weightStatus).find(
    (key) => bmi <= weightStatus[key].max
  );

  result = {
    status: status,
    color: weightStatus[status].color,
  };

  return result;
};

export { calculateBMI, capitalizeFirstLetter, pickColor };
