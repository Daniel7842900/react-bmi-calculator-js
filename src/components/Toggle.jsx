const Toggle = ({ handleOnChange }) => {
  return (
    <div className="px-4 py-4 flex justify-end">
      <label
        htmlFor="unit-toggle"
        className="inline-flex items-center rounded-md cursor-pointer dark:text-gray-800"
      >
        <input
          id="unit-toggle"
          type="checkbox"
          className="hidden peer"
          onChange={handleOnChange}
        />
        <span className="px-4 py-2 text-sm rounded-l-md dark:bg-cyan-200 peer-checked:dark:bg-gray-300">
          English
        </span>
        <span className="px-4 py-2 text-sm rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-cyan-200">
          Metric
        </span>
      </label>
    </div>
  );
};

export default Toggle;
