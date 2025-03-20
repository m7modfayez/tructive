import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";


function DriverList() {

   const driversList = [
      {
         name: "mahmoud",
         id: 1,
         vehicleID: 3,
         overSpeed: 10,
         harshAcce: "mahmoud@gmail.com",
         harshBreaking: 10,
         driverBehaviour: 10,
         excessiveIdling: 10,
         vehicleCondition: "Good",
         rate: 70
      },
      {
         name: "mahmoud",
         id: 1,
         vehicleID: 3,
         overSpeed: 10,
         harshAcce: "mahmoudd@gmail.com",
         harshBreaking: 10,
         driverBehaviour: 10,
         excessiveIdling: 10,
         vehicleCondition: "Good",
         rate: 77
      },
      {
         name: "mahmoud",
         id: 1,
         vehicleID: 3,
         overSpeed: 10,
         harshAcce: "mahmoudd@gmail.com",
         harshBreaking: 10,
         driverBehaviour: 10,
         excessiveIdling: 10,
         vehicleCondition: "Good",
         rate: 84
      },
      {
         name: "mahmoud",
         id: 1,
         vehicleID: 3,
         overSpeed: 10,
         harshAcce: "mahmoudd@gmail.com",
         harshBreaking: 10,
         driverBehaviour: 10,
         excessiveIdling: 10,
         vehicleCondition: "Good",
         rate: 90
      },
      {
         name: "mahmoud",
         id: 1,
         vehicleID: 3,
         overSpeed: 10,
         harshAcce: "mahmoudd@gmail.com",
         harshBreaking: 10,
         driverBehaviour: 10,
         excessiveIdling: 10,
         vehicleCondition: "Good",
         rate: Math.floor(Math.random() * 51) + 50
      },
      {
         name: "mahmoud",
         id: 1,
         vehicleID: 3,
         overSpeed: 10,
         harshAcce: "mahmoudd@gmail.com",
         harshBreaking: 10,
         driverBehaviour: 10,
         excessiveIdling: 10,
         vehicleCondition: "Good",
         rate: Math.floor(Math.random() * 51) + 50
      }, {
         name: "mahmoud",
         id: 1,
         vehicleID: 3,
         overSpeed: 10,
         harshAcce: "mahmoudd@gmail.com",
         harshBreaking: 10,
         driverBehaviour: 10,
         excessiveIdling: 10,
         vehicleCondition: "Good",
         rate: Math.floor(Math.random() * 51) + 50
      },
      {
         name: "mahmoud",
         id: 1,
         vehicleID: 3,
         overSpeed: 10,
         harshAcce: "mahmoudd@gmail.com",
         harshBreaking: 10,
         driverBehaviour: 10,
         excessiveIdling: 10,
         vehicleCondition: "Good",
         rate: Math.floor(Math.random() * 51) + 50
      }, {
         name: "mahmoud",
         id: 1,
         vehicleID: 3,
         overSpeed: 10,
         harshAcce: "mahmoudd@gmail.com",
         harshBreaking: 10,
         driverBehaviour: 10,
         excessiveIdling: 10,
         vehicleCondition: "Good",
         rate: Math.floor(Math.random() * 51) + 50
      }, {
         name: "mahmoud",
         id: 1,
         vehicleID: 3,
         overSpeed: 10,
         harshAcce: "mahmoudd@gmail.com",
         harshBreaking: 10,
         driverBehaviour: 10,
         excessiveIdling: 10,
         vehicleCondition: "Good",
         rate: Math.floor(Math.random() * 51) + 50
      }, {
         name: "mahmoud",
         id: 1,
         vehicleID: 3,
         overSpeed: 10,
         harshAcce: "mahmoudd@gmail.com",
         harshBreaking: 10,
         driverBehaviour: 20,
         excessiveIdling: 40,
         vehicleCondition: "Good",
         rate: Math.floor(Math.random() * 51) + 10
      },
   ]

   return (
      <>
         {/* <div className="modal"> */}

         <div className="driver-list-table-div">
            <form>
               <input className="driver-search" name="fsrch" id="" placeholder="Search..." />
            </form>
            <table className="driver-list-table">
               <thead>
                  <tr>
                     <th>Driver ID</th>
                     <th>Driver Name</th>
                     <th>Phone</th>
                     <th>Address</th>
                     <th>Email Address</th>
                  </tr>
               </thead>
               <tbody>
                  {driversList.map((driver, index) => (
                     <tr key={index}>
                        <td>{driver.id}</td>
                        <td>{driver.name}</td>
                        <td>{driver.vehicleID}</td>
                        <td>{driver.overSpeed}</td>
                        <td>{driver.harshAcce}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className="driver-list-buttons-div">
            <button className="driver-list-buttons"> <b>Remove</b> </button>
            <button className="driver-list-buttons"> <b>Add</b> </button>
         </div>

         {/* </div> */}
      </>
   )
}

export default DriverList;
export const LoginPage = () => {


   function Loginfun();



   const navigate = useNavigate();

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
         role: "admin",
      },
      validationSchema: Yup.object().shape({
         email: Yup.string().email("Invalid email format").required("Email is required"),
         password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      }),
      onSubmit: (values) => {
         if (values.role === "admin") {
            navigate("/admin-dashborad");
         } else if (values.role === "supervisor") {
            navigate("/supervisor-dashborad");
         }
      },
   });

   return (
      <div className="container">
         <div className="left-section">
            <h1>Tructive</h1>
         </div>
         <div className="right-section">
            <h2 className="login-title">Login</h2>
            <div className="login-box">
               <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <div className="input-group">
                     <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />
                     <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        {...formik.getFieldProps("email")} />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                     <div className="error-message">{formik.errors.email}</div>
                  ) : null}

                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                     <FontAwesomeIcon icon={faLock} style={{ marginRight: "10px" }} />
                     <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        {...formik.getFieldProps("password")} />
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                     <div className="error-message">{formik.errors.password}</div>
                  ) : null}

                  <div className="role-selection">
                     <input
                        type="radio"
                        id="admin"
                        name="role"
                        value="admin"
                        checked={formik.values.role === "admin"}
                        onChange={formik.handleChange} />
                     <label htmlFor="admin">Admin</label>

                     <input
                        type="radio"
                        id="supervisor"
                        name="role"
                        value="supervisor"
                        checked={formik.values.role === "supervisor"}
                        onChange={formik.handleChange} />
                     <label htmlFor="supervisor">Supervisor</label>
                  </div>

                  <button type="submit" className="login-button">
                     <strong>Login</strong>
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};
