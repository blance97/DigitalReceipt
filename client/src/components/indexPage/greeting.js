import React, { Component } from 'react';
import Cards from './Cards';

class Greetings extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"></hr>
                    <p>It uses utility class for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
                <Cards/>
            </div>
        )
    }
}
export default Greetings
