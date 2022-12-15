import React,{useState} from "react";
import { BsShare } from "react-icons/bs";
import { BiCopyAlt } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

// passing props to viewcard component and accessing state for handling close button
function Popup({ closeModal }) {
  const [copyText, setCopyText] = useState(window.location.href);

//onclick function for copying browser url.
const copyLink=(e)=>{
  navigator.clipboard.writeText(copyText)
  alert('Link is Copied')
  setCopyText(e.target.value)
}
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="mx-7 lg:w-96 lg:h-60 bg-slate-50 rounded-lg outline-none align-middle ">
        <div className="flex  justify-end m-3 opacity-50 hover:opacity-100">
          <button onClick={() => closeModal(false)} className="close">
            <GrClose />
          </button>
        </div>

        <span className="text-lg font-semibold px-7">Share</span>

        <div className="my-4 px-7 flex items-center justify-center ">
          <input
            className="border-2 border-dashed rounded-md  w-full py-2 px-2 pr-3 font-semibold text-sm "
            type="text"

            // onChange={(e)=>setCopyText(e.target.value)}
            value={copyText}


          />
          <button className="flex items-center justify-center  opacity-60 mx-4">
          <BiCopyAlt onClick={copyLink} className="text-2xl  hover:opacity-70" /> <BsShare className="text-lg ml-4" /> 
          </button>
        </div>
        <div className="icons">
          <ul className="flex items-center justify-around px-6 py-6">
            <div className="bg-blue-600  absolute-center">
              <a href="#/">
                <i className="text-white fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="bg-blue-600 absolute-center">
              <a href="/#">
                <i className="text-white fab fa-linkedin"></i>
              </a>
            </div>
            <div className="bg-green-500 absolute-center">
              <a href="#/">
                <i className="text-white fab fa-whatsapp"></i>
              </a>
            </div>
            <div className="bg-gray-200 absolute-center">
              <a href="#/">
                <i className="text-blue-600 fab fa-twitter"></i>
              </a>
            </div>
            
            <div className="bg-gray-200 absolute-center">
              <a href="/#">
                <i className="opacity-50 fa fa-envelope"></i>
              </a>
            </div>
          </ul>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Popup;
