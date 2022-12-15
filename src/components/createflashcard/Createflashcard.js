import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { MdUploadFile, MdAdd, MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { validationSchema } from "../../YupSchema/index.jsx";
import { v4 as uuidv4 } from "uuid";

//getting the values from local storage
const getDatafromLocalstorage = () => {
  const myList = localStorage.getItem("myFlashCards");
  if (myList) {
    return JSON.parse(myList);
  } else {
    return [];
  }
};

const Createflashcard = () => {
  //main array of objects state used to store all data into local storage
  const [inputFields, setInputFields] = useState(getDatafromLocalstorage());

 //initial form value for formik form handle (must)
  var initialValues = {
    groupname: "",
    description: "",
    flashterms: [{ term: "", defination: "" }],
  };

  //form submits & capture input data using onsubmit function.
  const onSubmit = (values, action) => {
    setInputFields([...inputFields, { id: uuidv4(), ...values }]);
    action.resetForm();
  };

  //calls every time the component renders and stote inputfield data into local storage
  useEffect(() => {
    localStorage.setItem("myFlashCards", JSON.stringify(inputFields));
  }, [inputFields]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div className="pt-2 sm:pt-5 mx-7 sm:mx-12 md:mx-20 lg:mx-24">
              <div className="grid sm:grid-cols-1 gap-6">
                <div className="p-6 sm:p-10 bg-slate-50 rounded-md shadow-lg">
                  <div className="sm:flex">
                    <div>
                      <label className="flex text-gray-500 mb-0.5 text-sm">
                        Create Group *
                      </label>
                      <Field
                        className="placeholder-gray-300 mb-1 p-2 h-8 w-full sm:w-60 border border-gray-400 rounded-sm focus:outline-none"
                        type="text"
                        placeholder="Enter Groupname"
                        name="groupname"
                      />
                    </div>

                    <div className="w-36 h-8 mt-2 sm:mt-5 sm:mx-4 border border-gray-400 rounded-sm hover:cursor-pointer ">
                      <div className="text-purple-700 ">
                        <span className="text-xs flex items-center justify-center font-semibold ">
                        <MdUploadFile className="h-auto w-6 mt-1 mr-2 " />
                          Upload Image
                        </span>
                      </div>
                      <input type="file" className="hidden" />
                    </div>
                  </div>
                  <ErrorMessage
                    name="groupname"
                    component="div"
                    className="text-red-500 text-xs"
                  />

                  <label className="block mb-0.5 mt-2 text-gray-500 text-sm">
                    Add Description
                  </label>

                  <Field
                    as="textarea"
                    type="text"
                    className="w-2/3 p-2 text-sm border border-gray-400 rounded-sm placeholder-gray-300 focus:outline-none "
                    name="description"
                    placeholder="Describe the roles,responsibility,skills required for the job and help candidate understand the role better."
                  />

                  <ErrorMessage
                    component="div"
                    name="description"
                    className="flex text-red-500 text-xs mb-1"
                  />
                </div>

                <div className="py-3 bg-slate-50 rounded-md shadow-lg">
                  <FieldArray name="flashterms">
                    {/* push and remove are the formik properties to add and remove the elements */}
                    {({ push, remove }) => (
                      <React.Fragment>
                        {values.flashterms.map((myterms, index) => (
                          <div key={index} className="grid grid-cols-1 px-6 sm:px-10 sm:w-auto sm:flex">
                            <div className="bg-green-500 mt-3  sm:mt-5 sm:mr-4 h-6 w-6 rounded-full text-white shrink-0">
                              <span className="flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </span>
                            </div>
                            <div className="w-full sm:mt-4 sm:mr-4">
                              <label className="block mb-0.5 text-gray-500 text-sm">
                                Enter Term *
                              </label>
                              <Field
                                name={`flashterms.${index}.term`}
                                type="text"
                                placeholder="Enter Term"
                                className="placeholder-gray-300 w-full p-2 h-8 border border-gray-400 rounded-sm focus:outline-none"
                              />
                              <ErrorMessage
                                name={`flashterms.${index}.term`}
                                component="div"
                                className="text-red-500 text-xs"
                              />
                            </div>

                            <div className="mt-2 sm:mt-4 sm:ml-10 md:ml-10 lg:ml-10 w-full">
                              <label className="block mb-0.5 text-gray-500 text-sm">
                                Enter Defination *
                              </label>
                              <Field
                                className="placeholder-gray-300 p-2 h-8 w-full border border-gray-400 rounded-sm focus:outline-none"
                                type="text"
                                placeholder="Enter Defination"
                                name={`flashterms[${index}].defination`}
                              />
                              <ErrorMessage
                                name={`flashterms.${index}.defination`}
                                component="div"
                                className="text-red-500 text-xs"
                              />
                            </div>

                            {index > 0 && (
                              <div className="flex items-center justify-start sm:mt-8 text-purple-700">
                                <button
                                  type="button"
                                  className="mr-4"
                                  onClick={() => remove(index)}
                                >
                                  <MdDeleteOutline className="w-6 h-12 sm:ml-4" />
                                </button>

                                <BiEdit className="w-6 h-12 cursor-pointer" />
                              </div>
                            )}
                          </div>
                        ))}
                        <button
                        
                          onClick={() => push({ term: "", defination: "" })}
                          type="button"
                          className="flex font-semibold pt-4 pb-2 ml-6 sm:ml-16 text-blue-600"
                        >
                          <MdAdd className="self-center mr-1" /> Add more
                        </button>
                      </React.Fragment>
                    )}
                  </FieldArray>
                </div>
              </div>
              <div className="my-10 grid place-content-center">
                <button
                  type="submit"
                  className="px-14 py-1.5 rounded-sm bg-red-600 text-white text-sm active:bg-red-700"
                >
                  Create
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Createflashcard;
