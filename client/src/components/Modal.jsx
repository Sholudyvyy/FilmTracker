import { IoMdCloseCircleOutline } from "react-icons/io";

export const Modal = ({
  setActive,
  confirm,
  title,
  confirmText,
  rejectText,
  children,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div
        className="relative bg-white rounded-lg shadow-lg w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={() => setActive(false)}
        >
          <IoMdCloseCircleOutline size={24} />
        </button>
        <h2 className="text-lg font-semibold text-center mb-4">{title}</h2>
        <div className="mb-6 p-6">{children}</div>
        <div className="flex justify-end space-x-3 mb-4 mr-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={() => setActive(false)}
          >
            {rejectText}
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => confirm()}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
