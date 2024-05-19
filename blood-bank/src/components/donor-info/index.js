import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDonors } from "../../redux/features/donors/donorSlice";
import Header from "../common/header";

const DonorInfoTable = () => {
  const dispatcher = useDispatch();
  const { donors } = useSelector((state) => state.donors);
  useEffect(() => {
    dispatcher(getDonors());
  }, []);
  return (
    <div id="home">
      <Header />
      <div className="container mt-5">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Address</td>
              <td>Blood Type</td>
              <td>Conatct</td>
            </tr>
          </thead>
          <tbody>
            {donors &&
              donors.map((donor, index) => (
                <tr>
                  <td>{donor.userName}</td>
                  <td>{`${donor.address}, ${donor.city}`}</td>
                  <td>{donor.bloodGroup}</td>
                  <td>{donor.mobile}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorInfoTable;
