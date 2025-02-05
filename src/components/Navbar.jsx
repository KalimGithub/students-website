import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";

function Navbar() {
  const [inputs, setInputs] = useState({});
  const [Loading, setLoading] = useState(false);
  const firebase = useFirebase();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // console.log("inputs", inputs);
    setLoading(true);
    const result = await firebase.handleCreateNewList(inputs);
    console.log("success", result);
    setLoading(false);
  };
  return (
    <div className="w-full h-[4rem] bg-blue-500 flex justify-between text-white px-6 py-4 items-center">
      <h3>Navbar</h3>
      <div className="flex gap-2">
        <p>Contact</p>
        <div>
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add Student
          </button>

          {/* Modal when clicked on add student */}
          <dialog id="my_modal_1" className="modal w-[35vw] m-auto px-4 py-6">
            <div className="modal-box w-full">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <h3 className="text-xl my-2 font-semibold">
                  Add Students Details
                </h3>
                {/* <label id="name">Name: </label> */}
                <input
                  type="number"
                  name="id"
                  placeholder="Enter your ID"
                  className="w-full border-2 my-2 px-4 py-2 rounded-lg"
                  onChange={handleChange}
                  value={inputs.id || ""}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full border-2 my-2 px-4 py-2 rounded-lg"
                  onChange={handleChange}
                  value={inputs.name || ""}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full border-2 my-2 px-4 py-2 rounded-lg"
                  onChange={handleChange}
                  value={inputs.email || ""}
                />
                <input
                  type="text"
                  name="className"
                  placeholder="Enter Your Class"
                  className="w-full border-2 my-2 px-4 py-2 rounded-lg"
                  onChange={handleChange}
                  value={inputs.className || ""}
                />
                <input
                  type="text"
                  name="section"
                  placeholder="Enter Your Section"
                  className="w-full border-2 my-2 px-4 py-2 rounded-lg"
                  onChange={handleChange}
                  value={inputs.section || ""}
                />
                <input
                  type="number"
                  name="rollNumber"
                  placeholder="Enter Your Roll Number"
                  className="w-full border-2 my-2 px-4 py-2 rounded-lg"
                  onChange={handleChange}
                  value={inputs.rollNumber || ""}
                />
                {/* <label for="gender">Choose your gender:</label> */}
                <select
                  name="gender"
                  id="gender"
                  onChange={handleChange}
                  value={inputs.gender || ""}
                >
                  <option value="">Select Yours Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter Your Age"
                  className="w-full border-2 my-2 px-4 py-2 rounded-lg"
                  onChange={handleChange}
                  value={inputs.age || ""}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  className="w-full border-2 my-2 px-4 py-2 rounded-lg"
                  onChange={handleChange}
                  value={inputs.address || ""}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Favorite Subject"
                  className="w-full border-2 my-2 px-4 py-2 rounded-lg"
                  onChange={handleChange}
                  value={inputs.subject || ""}
                />
                <input
                  type="text"
                  name="hobby"
                  placeholder="Enter Your Hobby"
                  className="w-full border-2 my-2 px-4 py-2 rounded-lg"
                  onChange={handleChange}
                  value={inputs.hobby || ""}
                />
                <input
                  type="text"
                  name="travel"
                  placeholder="Enter Your favorite travel destination"
                  className="w-full border-2 my-2 px-4 py-2 rounded-lg"
                  onChange={handleChange}
                  value={inputs.travel || ""}
                />
                <button
                  className="text-center w-[40%] border-2 ease-in-out border-blue-500 bg-blue-500 rounded-lg text-white px-4 py-2 cursor-pointer hover:bg-white hover:text-blue-500 my-4"
                  type="submit"
                >
                  Add Student
                </button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn m-auto w-full mt-2">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
