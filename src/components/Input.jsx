const Input = ({ id, label, value, handleOnChange, handleOnKeyDown }) => {
  return (
    <div>
      <input
        type="number"
        id={id}
        className="mb-1 w-14 rounded-lg"
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        value={value}
      />
      <label className="ml-2">{label}</label>
    </div>
  );
};

export default Input;
