import React, { Component } from 'react';
import Table from './Table';

class Form extends Component {
  state = {
    displayTable: false,
    salary: 0,
    exp: 0,
    errors: {
      salary: 'Invalid value',
      exp: 'Invalid value'
    }
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(event) {
    if (/^[0-9]+$/g.test(this.state.salary) && /^[0-9]+$/g.test(this.state.exp)) {
      this.setState({
        displayTable: true
      });
    } else {
      event.preventDefault();
    }
  }

  render() {
    const { displayTable, salary, exp } = this.state;

    return (
      <form name="calcForm">
        <fieldset>
          <legend>Калкулатор брутно/нетно възнаграждение:</legend>
          <label>
            Брутно възнаграждение:
            <input
              name="salary"
              id="salaryGross"
              type="number"
              placeholder="amount"
              value={this.state.salary}
              onChange={e => this.handleChange(e)}
              required="required"
              pattern="[0-9]*"
              title="Please enter a valid number"
            />
            <span className="err1">{!/^[0-9]+$/g.test(this.state.salary) && this.state.errors.salary}</span>
          </label>

          <label>
            Години трудов стаж:
            <input
              name="exp"
              id="yearsExp"
              type="number"
              placeholder="amount"
              value={this.state.exp}
              onChange={e => this.handleChange(e)}
              required="required"
              pattern="[0-9]*"
              title="Please enter a valid number"
              min="1"
              max="35"
            />
            <span className="err2">{!/^[0-9]+$/g.test(this.state.exp) && this.state.errors.exp}</span>
          </label>
          <button type="button" onClick={event => this.handleClick(event)}>
            Calc!
          </button>
          <div className="displayPool">{displayTable && <Table salary={salary} exp={exp} />}</div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
