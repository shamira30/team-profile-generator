import React from "react";
import "./EmployeeCard.css";

function EmployeeCard({ employee ,index, deleteEmployee}) {
  return (
    <div className="employee-card">
      {employee.imageUrl && <img src={employee.imageUrl} alt={employee.name} />}
      <h2>{employee.name}</h2>
      <p>Role: {employee.role}</p>
      <p>ID: {employee.id}</p>
      <p>
        Email: <a href={`mailto:${employee.email}`}>{employee.email}</a>
      </p>
      <p>
        Github:{" "}
        <a href={employee.github} target="_blank" rel="noreferrer">
          {employee.github}
        </a>
      </p>
      <button onClick={() => deleteEmployee(index)}>Delete</button>
    </div>
  );
}

export default EmployeeCard;
