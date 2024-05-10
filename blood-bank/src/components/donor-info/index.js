import React from 'react';
import { donors } from '../../utils/util';

const DonorInfoTable = () => {
  return (
    <div className="table-container mt-5 mx-auto">
      <table className="donor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Type</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index} className="donor-row">
              <td>{donor.name}</td>
              <td>{donor.bloodType}</td>
              <td>{donor.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonorInfoTable;
