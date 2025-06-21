import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "./DriverReportSelection.css";
import { Outlet } from "react-router-dom";

const DriverReportSelection: React.FC = () => {
  const navigate = useNavigate();
  const [driverId, setDriverId] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const reportDate = `${selectedYear}-${selectedMonth}`;
    // const formData = {
    //   driverId,
    //   reportDate,
    // };

    try {
      // const response = await axios.post("https://trucktive.runasp.net/api/Driver-report", formData);

      // لو العملية نجحت، روح للصفحة التالية ومعاك البيانات
      navigate("driver-report", {
        state: {
          driverId,
          reportDate,
          // reportData: response.data, // ده اللي جالك من الـ API
        },
      });
    } catch (error) {
      console.error("Failed to fetch driver report:", error);
      alert("Error getting report. Please try again.");
    }
  };

  const handleClose = () => {
    navigate("/supervisor-dashboard");
  };

  return (
    <>
      <div className="driver-report-selection-container">
        <div className="driver-report-selection-form">
          <button className="close-btn" onClick={handleClose}>×</button>
          <h2 className="form-title">Driver Report</h2>

          <form onSubmit={handleSubmit}>
            <div className="row-inputs">
              <div className="form-group">
                <label>Driver ID</label>
                <input
                  type="text"
                  value={driverId}
                  onChange={(e) => setDriverId(e.target.value)}
                  placeholder="Enter Driver ID"
                  required
                />
              </div>

              <div className="form-group">
                <label>Month</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  required
                >
                  <option value="">Select Month</option>
                  {[
                    { value: "01", label: "January" },
                    { value: "02", label: "February" },
                    { value: "03", label: "March" },
                    { value: "04", label: "April" },
                    { value: "05", label: "May" },
                    { value: "06", label: "June" },
                    { value: "07", label: "July" },
                    { value: "08", label: "August" },
                    { value: "09", label: "September" },
                    { value: "10", label: "October" },
                    { value: "11", label: "November" },
                    { value: "12", label: "December" },
                  ].map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  required
                >
                  <option value="">Select Year</option>
                  {[2021, 2022, 2023, 2024, 2025, 2026].map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="select-btn">Select</button>
          </form>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default DriverReportSelection;
