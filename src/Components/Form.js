import React, { Component } from 'react';
import Table from './Table';

class Form extends Component {
  state = {
    displayTable: false,
    salary: '',
    exp: ''
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    this.setState({
      displayTable: true
    });
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
            />
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
            />
          </label>
          <button type="button" onClick={() => this.handleClick()}>
            Calc!
          </button>
          <div className="displayPool">{displayTable && <Table salary={salary} exp={exp} />}</div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
