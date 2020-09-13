import React, { Component } from 'react';
import './OrderForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSchool, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import counties from './judete.json';
import axios from 'axios';

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      county: '',
      school: '',
      email: '',
      phone: ''
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const reqBody = { ...this.state };
    reqBody.subscription_type = event.target[0].value;
    axios
      .post('http://localhost:5000/api/v1/email/subscription', reqBody)
      .then(response => {
        this.response = { ...response };
        window.location.reload();
      })
      .catch(e => {
        alert('Error sending the message');
        console.log(e);
      });
  };

  render() {
    const countiesOptions = counties.map((county, index) => (
      <option value={county.nume} key={index}>
        {county.nume}
      </option>
    ));

    let select;

    if (this.props.selected === '1')
      select = (
        <select name="subscription_type" id="" selected="Alege tipul de abonament dorit">
          <option value="" selected disabled>
            Alege tipul de abonament dorit
          </option>
          <option value="anual" selected>
            Abonament anual
          </option>
          <option value="semestrial">Abonament semestrial</option>
          <option value="lunar">Abonament lunar</option>
        </select>
      );
    else if (this.props.selected === '2')
      select = (
        <select name="subscription_type" id="" selected="Alege tipul de abonament dorit">
          <option value="" selected disabled>
            Alege tipul de abonament dorit
          </option>
          <option value="anual">Abonament anual</option>
          <option value="semestrial" selected>
            Abonament semestrial
          </option>
          <option value="lunar">Abonament lunar</option>
        </select>
      );
    else if (this.props.selected === '3')
      select = (
        <select name="subscription_type" id="" selected="Alege tipul de abonament dorit">
          <option value="" selected disabled>
            Alege tipul de abonament dorit
          </option>
          <option value="anual">Abonament anual</option>
          <option value="semestrial">Abonament semestrial</option>
          <option value="lunar" selected>
            Abonament lunar
          </option>
        </select>
      );
    else if (this.props.selected === '0')
      select = (
        <select name="subscription_type" id="" selected="Alege tipul de abonament dorit">
          <option value="" selected disabled>
            Alege tipul de abonament dorit
          </option>
          <option value="anual">Abonament anual</option>
          <option value="semestrial">Abonament semestrial</option>
          <option value="lunar">Abonament lunar</option>
        </select>
      );

    return (
      <div className="order-form" id={this.props.id}>
        <h2 className="title">Comandă abonamentul dorit</h2>
        <p className="description">Completează formularul de mai jos și vom reveni cu un apel sau e-mail.</p>

        <form onSubmit={this.submitHandler}>
          <div className="wrapper">
            {select}
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </div>
          <div className="wrapper">
            <select name="county" id="" onChange={this.changeHandler}>
              <option value="" selected disabled>
                Selectează județul
              </option>
              {countiesOptions}
            </select>
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </div>
          <div className="wrapper">
            <input type="text" name="school" placeholder="Numele școlii" onChange={this.changeHandler} />
            <FontAwesomeIcon icon={faSchool} className="icon" />
          </div>
          <div className="wrapper">
            <input type="text" name="email" placeholder="E-mail" onChange={this.changeHandler} />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
          <div className="wrapper">
            <input type="text" name="phone" placeholder="Telefon" onChange={this.changeHandler} />
            <FontAwesomeIcon icon={faPhone} className="icon" />
          </div>
          <div className="wrapper">
            <button type="submit">Trimite</button>
          </div>
        </form>

        <p className="note">
          *notă:
          <br />
          - dacă a început deja anul școlar, pentru abonamentul anual veți plăti doar lunile rămase din anul
          școlar. Se aplică și pentru abonamentul semestrial.
          <br />- abonamentul anual nu este valabil dacă s-a terminat deja primul semestru.
        </p>
      </div>
    );
  }
}

export default OrderForm;
