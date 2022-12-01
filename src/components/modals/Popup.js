import React,{useState} from "react";
import { BsShare } from "react-icons/bs";
import { BiCopyAlt } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

// passing props to viewcard component and accessing state for handling close button
function Popup({ closeModal }) {
  const [copyText, setCopyText] = useState('http://www.example.com/share-link');

//onclick function for coping url as a link.
const copyLink=()=>{
  navigator.clipboard.writeText(copyText)
  alert('Link is Copied')
}
 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-slate-50 rounded-lg mx-auto my-40  w-1/3 h-60 outline-none align-middle ">
        <div className="flex items-end justify-end m-3 opacity-50 hover:opacity-100">
          <button onClick={() => closeModal(false)} className="close">
            <GrClose />
          </button>
        </div>

        <span className="text-lg font-semibold px-10">Share</span>

        <div className="my-4 px-10 flex items-center justify-center ">
          <input
            className="border-2 border-dashed rounded-md  w-full py-2 px-2 pr-3 font-semibold text-sm "
            type="text"
            onChange={(e)=>setCopyText()}

            value={window.location.href}
          />
          <button className="flex items-center justify-center  opacity-60 mx-4">
          <BiCopyAlt onClick={copyLink} className="text-2xl  hover:opacity-70" /> <BsShare className="text-lg ml-4" /> 
          </button>
        </div>
        <div className="icons">
          <ul className="flex items-center justify-around px-6 py-4">
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
