import React, { Component } from 'react'
import "./Employee.css";



export default class EmployeeList extends Component {
    render () {
        // JavaScript stuff can be writen here!
        
        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        New Employee
                    </button>
                </div>
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                            
                                {employee.name}<br />
                                {employee.phone}
                                <button onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Fired</button>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}


