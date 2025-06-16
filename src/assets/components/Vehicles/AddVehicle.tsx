import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Closing from "../base-components/Closing";
import BaseButton from "../base-components/BaseButton";

function AddingVehicleWindow() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const confirmAddVehicle = async (e: React.FormEvent) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId"); // if stored in login
    const payload = {
      userId,
      ...formData
    };

    try {
      const response = await axios.post("https://trucktive.runasp.net/api/Vehicles", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (response.status === 200) {
        setSuccessMessage("✅ Vehicle has been added successfully!");
        setErrorMessage("");
        // setTimeout(() => navigate(-1), 2000);
        setTimeout(() => {
        navigate(-1);
        setTimeout(() => window.location.reload(), 100); // wait a bit before reload
        }, 2000);

      } else {
        setErrorMessage("An error occurred while adding the vehicle.");
        setSuccessMessage("");
      }
    } catch (error: any) {
      console.error("Error:", error.response || error.message);
      setErrorMessage(error.response?.data?.message || "An unexpected error occurred.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="base-actions-window" style={{ width: "80vw" }}>
      <Closing />
      <div style={{ textAlign: "center", margin: "0 auto", width: "fit-content" }}>
        <h1>Add New Vehicle</h1>
      </div>

      <div className="company-form-div">
        <form className="company-form" onSubmit={confirmAddVehicle}>
          <div className="form-attr">
            <label htmlFor="brand">Vehicle's Manufacturer</label>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Enter Manufacturer..."
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-attr">
            <label htmlFor="model">Vehicle's Model</label>
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Enter Model..."
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-attr">
            <label htmlFor="year">Model Year</label>
            <input
              type="number"
              id="year"
              name="year"
              placeholder="Enter Model Year..."
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>

              {successMessage && <div className="success-message">{successMessage}</div> }
              {errorMessage && <div className="error-message">{errorMessage}</div>}
           

          <div style={{width: "100%", marginTop: "20px", textAlign: "center",}}>
             <BaseButton
               name="Add Vehicle"
               className="admin-confirm-adding-button"
               baseButtonOnClick={() => {}}
               />
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddingVehicleWindow;
