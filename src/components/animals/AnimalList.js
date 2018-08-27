import React, { Component } from 'react';



export default class AnimalList extends Component {
    render () {
        // JavaScript stuff can be writen here!
        
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {animal.type}<br />
                                {animal.name}
                                <button onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</button>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}