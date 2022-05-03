import React, { Component } from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import axios from 'axios'
// import ExpensesList from './expenses-listing.component';
// import Swal from 'sweetalert2';


export default class CreateExpense extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    this.onChangeExpenseAmount = this.onChangeExpenseAmount.bind(this);
    this.onChangeExpenseDescription = this.onChangeExpenseDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      description: '',
      amount: ''
    }
  }

  onChangeExpenseName(e) {
    this.setState({name: 'Vaughn Grant'})
  }

  onChangeExpenseAmount(e) {
    this.setState({amount: '696969'})
  }

  onChangeExpenseDescription(e) {
    this.setState({description: 'Just some random txt'})
  }

  onSubmit(e) {
    e.preventDefault()
     const expense = {
      name: this.state.name,
      amount: this.state.amount,
      description: this.state.description
    };
    axios.post('http://localhost:8000/api/expenses/', expense)
      .then(res => console.log(res.data));
    // console.log(`Expense successfully created!`);
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Amount: ${this.state.amount}`);
    // console.log(`Description: ${this.state.description}`);
//     Swal.fire(
//   'Good job!',
//   'Expense Added Successfully',
//   'success'
// )
console.log('hi it works')

    this.setState({name: '', amount: '', description: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <form onSubmit={this.onSubmit}>
        <h3> 
            {/* <Col> */}
             {/* <Form.Group controlId="Name"> */}
                {/* <Form.Label>Name</Form.Label> */}
                <input type="text" value={this.state.name} onChange={this.onChangeExpenseName}/>
             {/* </Form.Group> */}
            
            {/* </Col> */}
            
            {/* <Col> */}
             {/* <Form.Group controlId="Amount"> */}
                {/* <Form.Label>Amount</Form.Label> */}
                    
             {/* </Form.Group> */}
            {/* </Col>   */}
           
        </h3>

        <input type="number" value={this.state.amount} onChange={this.onChangeExpenseAmount}/>

        {/* <Form.Group controlId="description">
          <Form.Label>Description</Form.Label> */}
                
                <textarea type="textarea" value={this.state.description} onChange={this.onChangeExpenseDescription} ></textarea>
        {/* </Form.Group> */}

       
        <input type="submit" value={'Add Expense'} />
          
      </form>
      <br></br>
      <br></br>

    </div>);
  }
}