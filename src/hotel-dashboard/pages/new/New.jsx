import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/lamadev/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newUser = {
        ...info,
        img: url,
      };

      await axios.post("/auth/register", newUser);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info);
  return (
    <div className="new w-full flex">
      <div className="newContainer flex-[6]">
        <div className="top shadow-md p-4 m-5">
          <h1 className="text-gray-400 text-lg">{title}</h1>
        </div>
        <div className="bottom shadow-md p-4 m-5 flex">
          <div className="left flex-1 text-center">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="img w-24 h-24 rounded-full object-cover mx-auto"
            />
          </div>
          <div className="right flex-2 px-5">
            <form>
              <div className="formInput w-2/5">
                <label htmlFor="file" className="label flex items-center gap-2">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {(inputs || []).map((input) => (
                <div className="formInput w-2/5" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    className="input w-full p-1 border-b border-gray-400 focus:outline-none"
                  />
                </div>
              ))}
              <button
                onClick={handleClick}
                className=" button w-36 p-2 bg-teal-600 text-white font-bold cursor-pointer mt-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
