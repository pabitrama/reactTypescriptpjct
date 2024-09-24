import React from 'react';
import { EmployeeDetails } from '../Model/Employee';



import './../assets/styles/table.css'

interface EmployeeData {
    employeeData: EmployeeDetails[];
}

const Employee: React.FC<EmployeeData> = (props: EmployeeData) => {
    return (
        <>
            <h4>Employee Table</h4>
            <table id="emptable" className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sl. no.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employeeData.map((employeeDetails) => 
                        employeeDetails.tableDetails.map((res, empIndex) => (
                            <tr key={empIndex}>
                                <td>{empIndex + 1}</td>
                                <td>{res.name}</td>
                                <td>{res.age}</td>
                                <td>{res.designation}</td>
                                <td>{res.salary}</td>
                                <td>{res.department}</td>
                                <td>
                                    {res.address.map((eadds, addrIndex) => (
                                        <div key={addrIndex}>
                                            <span>{eadds.street}, </span>
                                            <span>{eadds.post}, </span>
                                            <span>{eadds.pin}, </span>
                                            <span>{eadds.district}</span>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
};

export default Employee;
