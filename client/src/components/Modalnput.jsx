export const ModalInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={onChange}
    />
  );
};
