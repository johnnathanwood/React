import React, { Component } from "react"
import "./Employee.css"

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        id: "",
        name: "",
        phone: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewEmployee = evt => {
        evt.preventDefault()
        if (this.state.animal === "") {
            window.alert("Please select a animal")
        } else {
            const employee = {
                id: this.state.employeeName,
                name: this.state.phone,
                // phone: this.props.animal.find(e => e.name === this.state.animal).id
            }

            // Create the animal and redirect user to animal list
            this.props.addEmployee(employee).then(() => this.props.history.push("/employees"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee Name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="employeeName"
                               placeholder="Employee name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phone" placeholder="Phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="animal">Assign to animal</label>
                        <select defaultValue="" name="animal" id="animal"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an animal</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}