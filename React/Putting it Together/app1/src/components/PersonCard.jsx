import React, {Component} from 'react'




class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            age: this.props.age
        };
    }

    addCount = () => {
        this.setState({age: this.state.age + 1});
    };

    render(){

        // const {fname, lname, age, color} = this.props;
        return(
            <>
            <h1>{this.props.lname}, {this.props.fname}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.color}</p>
            <button onClick={this.addCount}>Birthday Button for {this.props.fname} {this.props.lname}</button>
            </>
        );
    };

}

export default PersonCard