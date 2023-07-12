import React, { useState, useEffect } from 'react';
import EmployeeCard from './components/EmployeeCard';
import './App.css';

function App() {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem('employees')) || []
  );

  const addEmployee = (e) => {
    e.preventDefault();
    const form = e.target;
    const employee = {
      name: form.name.value,
      role: form.role.value,
      id: form.id.value,
      email: form.email.value,
      github: form.github.value,
      imageUrl: form.imageUrl.value,
    };
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
    form.reset();
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee, index) => index !== id));
  };


  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  return (
    <div className="app">
     <form onSubmit={addEmployee}>
        <input name="name" placeholder="Name" required />
        <input name="role" placeholder="Role" required />
        <input name="id" placeholder="ID" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="github" placeholder="Github profile url" required />
        <input name="imageUrl" placeholder="Image URL" />
        <button type="submit">Add</button>
      </form>
      <div className="employee-list">
        {employees.map((employee, i) => (
          <EmployeeCard
            key={i}
            index={i}
            employee={employee}
            deleteEmployee={deleteEmployee}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
