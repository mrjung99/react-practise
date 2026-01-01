import ClearIcon from "@mui/icons-material/Clear";
const Modal = ({ setOpen }) => {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] h-full w-full flex items-center justify-center">
      <div className="relative bg-gray-50 w-3xl p-8 space-y-2 shadow-xl rounded-md">
        <ClearIcon
          className="absolute -top-3 -right-2 bg-gray-200 rounded-full p-1 shadow-xl cursor-pointer hover:bg-gray-300 hover:scale-105 text-gray-800"
          fontSize="20"
          onClick={() => setOpen(false)}
        />
        <h1 className="text-gray-800">Title of the page</h1>
        <p className="font-sans text-xl text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex iste
          illum doloremque nam non soluta, neque perferendis quod commodi ut
          expedita nostrum quasi, tenetur eius sed. Earum sequi deserunt
          ducimus.
        </p>
      </div>
    </div>
  );
};

export default Modal;
