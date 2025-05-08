import React from "react";
import Header from "../Header";
import AdminNav from "./AdminNav";
import "./Massage.css";
import { MdDelete } from "react-icons/md";
const Massage = () => {
  return (
    <>
      <Header role="Messages" />
      <div className="con" style={{ marginTop: "70px" }}>
        <div className="Massages">
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Company Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Ali</td>
                <td>Mac</td>
                <td>0115184011</td>
                <td>ALI@gamil.com</td>
                <td>
                  HellO my name is Ali i want to connect with your company{" "}
                </td>
                <td>
                  <MdDelete color="red" size={20} />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Ali</td>
                <td>Mac</td>
                <td>0115184011</td>
                <td>ALI@gamil.com</td>
                <td>
                  HellO my name is Ali i want to connect with your company{" "}
                </td>
                <td>
                  <MdDelete color="red" size={20} />
                </td>
              </tr>{" "}
              <tr>
                <td>1</td>
                <td>Ali</td>
                <td>Mac</td>
                <td>0115184011</td>
                <td>ALI@gamil.com</td>
                <td>
                  HellO my name is Ali i want to connect with your company{" "}
                </td>
                <td>
                  <MdDelete color="red" size={20} />
                </td>
              </tr>{" "}
              <tr>
                <td>1</td>
                <td>Ali</td>
                <td>Mac</td>
                <td>0115184011</td>
                <td>ALI@gamil.com</td>
                <td>
                  HellO my name is Ali i want to connect with your company{" "}
                </td>
                <td>
                  <MdDelete color="red" size={20} />
                </td>
              </tr>{" "}
              <tr>
                <td>1</td>
                <td>Ali</td>
                <td>Mac</td>
                <td>0115184011</td>
                <td>ALI@gamil.com</td>
                <td>
                  HellO my name is Ali i want to connect with your company{" "}
                </td>
                <td>
                  <MdDelete color="red" size={20} />
                </td>
              </tr>{" "}
              <tr>
                <td>1</td>
                <td>Ali</td>
                <td>Mac</td>
                <td>0115184011</td>
                <td>ALI@gamil.com</td>
                <td>
                  HellO my name is Ali i want to connect with your company{" "}
                </td>
                <td>
                  <MdDelete color="red" size={20} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AdminNav  />
    </>
  );
};

export default Massage;
