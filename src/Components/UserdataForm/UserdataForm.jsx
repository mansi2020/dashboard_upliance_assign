import React, { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid"; // Import nanoid for generating unique IDs
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../Context/Context";
import "react-toastify/dist/ReactToastify.css";

import "./UserdataForm.css";

function UserdataForm() {
  const [formData, setFormData] = useState({
    userId: "", // Initially empty user ID
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  // context data
  const { data, setData } = useContext(UserContext);

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setUnsavedChanges(true);
    setData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenerateUserId = () => {
    if (formData.name && formData.email && formData.address && formData.phone) {
      setFormData({
        ...formData,
        userId: nanoid(), // Generate new user ID
      });
      setData({
        ...formData,
        userId: nanoid(),
      });
      setUnsavedChanges(true);
      setIsSaveDisabled(false);
    } else {
      toast.error(
        "Please fill in Name, Email, Address, and Phone fields before generating User ID"
      );
      setIsSaveDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.userId) {
      toast.error("Please generate User ID before saving");
      return;
    }

    // Get existing data from local storage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];

    // Append the new form data to the existing array
    const newData = [...existingData, formData];
    localStorage.setItem("userData", JSON.stringify(newData));

    // Handle form submission logic here
    console.log("Form data saved:", formData);

    // Show toast notification
    toast.success("Form data saved!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Clear all input fields after form submission
    setFormData({
      userId: "",
      name: "",
      address: "",
      email: "",
      phone: "",
    });
    setUnsavedChanges(false);
    setIsSaveDisabled(true);
  };

  useEffect(() => {
    setIsSaveDisabled(true);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <h1>UserData Form</h1>
        <div className="form-label-data">
          <div className="first-form-data">
            <label className="name-label">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
              />
            </label>

            <label className="formData-label">
              <textarea
                type="text"
                name="address"
                value={formData.address}
                placeholder="Address"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="second-form-data">
            <label className="email-label">
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
              />
            </label>

            <label className="phone-lable">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Phone No."
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="generate-lable">
          <div className="useId-container">
            <span id="user-id">User ID:</span>
            {formData.userId}
          </div>
          <button
            type="button"
            onClick={handleGenerateUserId}
            id="generate-btn"
          >
            Generate
          </button>
        </div>

        <button type="submit" disabled={isSaveDisabled} id="save-btn">
          Save
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default UserdataForm;
