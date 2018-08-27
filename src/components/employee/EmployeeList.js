import React, { Component } from 'react'


export default class EmployeeList  extends Component {
    render() {
        return (
            <section className="emplyees">
                <h2>Employees</h2>
                {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                    <div className="card-body">
                    <h5 className="card-title">
                        <h4>{employee.name}</h4>
                        <button onClick={() => this.props.deleteEmployee(employee.id)}
                            className="card-link">Delete</button>
                    </h5>
                    </div>
                </div>

                )
            }
            </section>
        );
    }
}


