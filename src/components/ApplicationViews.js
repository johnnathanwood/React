import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import AnimalDetail from './animals/AnimalDetail'
import AnimalManager from "../modules/AnimalManager"
import AnimalForm from "./animals/AnimalForm"
import LocationList from './location/LocationList'
import EmployeeList from "./employee/EmployeeList"
import EmployeeForm from './employee/EmployeeForm'
import OwnersList from './owners/OwnersList'
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import Login from "./Login/Login"



export default class ApplicationViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }


    componentDidMount() {
        const newState = {}

        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })

        EmployeeManager.getAll().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })

        LocationManager.getAll().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })
            
        OwnerManager.getAll().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })
            .then(() => this.setState(newState))
            
    }

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        }))
    }
    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        }))
    }
    deleteLocation = id => {
        return fetch(`http://localhost:5002/locations/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/locations`))
        .then(e => e.json())
        .then(location => this.setState({
            locations: location
        }))
    }
    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        }))
    }
    addAnimal = animal => AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))
    addEmployee = employee => EmployeeManager.post(employee)
        .then(() => EmployeeManager.getAll())
        .then(employees => this.setState({
            employees: employees
        }))
    


    render() {
        return (
            <React.Fragment>
                
                {/* <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} /> */}
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />

               <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                       deleteAnimal={this.deleteAnimal}
                       animals={this.state.animals} />
                }} />

                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} />
                }} />

                {/* <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                    return <EmployeeList deleteEmployee={this.deleteEmployee}
                             employees={this.state.employees} />
                    } else {
                    return <Redirect to="/login" />
                    }
                }} /> */}

                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props}
                       deleteEmployee={this.deleteEmployee}
                       employees={this.state.employees} />
                       if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                                 employees={this.state.employees} />
                        } else {
                        return <Redirect to="/login" />
                        }
                }} />

                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                       addEmployee={this.addEmployee}
                       employees={this.state.employees} />
            }} />

                {/* <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} /> */}
                <Route exact path="/owners" render={props => {
                    if (this.isAuthenticated()) {
                    return <OwnersList deleteOwer={this.deleteOwner}
                             owners={this.state.owners} />
                    } else {
                    return <Redirect to="/login" />
                    }
                }} />

                <Route path="/login" component={Login} />

                {/* <Route exact path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                    return <AnimalList deleteAnimal={this.deleteAnimal}
                             animals={this.state.animals} />
                    } else {
                    return <Redirect to="/login" />
                    }
                }} /> */}

                
                <Route exact path="/" render={props => {
                    if (this.isAuthenticated()) {
                    return <LocationList deleteLocation={this.deleteLocation}
                             locations={this.state.locations} />
                    } else {
                    return <Redirect to="/login" />
                    }
                }} />
                
            </React.Fragment>
        )
    }
}