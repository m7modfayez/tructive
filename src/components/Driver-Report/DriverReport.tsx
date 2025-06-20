import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DriverReport.css';
import { useLocation } from 'react-router-dom';

const DriverReport: React.FC = () => {

  const location = useLocation();
  const {reportDate, driverId} = location.state || {};

  console.log(reportDate, driverId);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/supervisor-dashboard');
    console.log(reportDate, driverId);

  };

  return (
    <div className="report-container">
      <div className="header">
        <div className="score-badge">60%</div>
        <button className="close-button" onClick={handleBack}>
          &times;
        </button>
        <h2>Company Name</h2>
        <p>Mahmoud Ali {driverId} </p>
        <p>Cairo, Egypt</p>
        {/* <p>{reportDate}</p> */}
        <p>+20 (010) 14571</p>
      </div>

      <div className="bar-chart">
        <div className="bar bar1">
          <span className="bar-value">40%</span>
        </div>
        <div className="bar bar2">
          <span className="bar-value">70%</span>
        </div>
        <div className="bar bar3">
          <span className="bar-value">80%</span>
        </div>
        {/* <div className="bar bar4">
          <span className="bar-value">75%</span>
        </div> */}
        <div className="bar bar5">
          <span className="bar-value">50%</span>
        </div>
      </div>

      <div className="bar-labels">
        <span>Excessive Idling</span>
        <span>Harsh Braking</span>
        <span>Harsh Acceleration</span>
        {/* <span>Harsh Deceleration</span> */}
        <span>Over Speed</span>
      </div>

      <div className="comment-box">
        <p>
          "This driver demonstrates a stark tendency toward harsh acceleration,
          and it is recommended to issue a cautionary notice regarding this
          behavior."
        </p>
      </div>

      <div className="action-buttons">
        {/* <button className="btn-details">Details</button> */}
        <button className="btn-print" onClick={() => {window.print()}} >Print</button>
      </div>
    </div>
  );
};

export default DriverReport;