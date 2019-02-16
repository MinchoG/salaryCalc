import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { salaryGross: '', yearsExp: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    const salary = parseInt(this.state.salaryGross, 10);
    const exp = parseInt(this.state.yearsExp, 10);
    //placeholders
    const elemGross = document.getElementById('id1');
    const elemExp = document.getElementById('id2');
    const elemSum12 = document.getElementById('id3');
    const grossFlat = document.getElementById('id4');
    const elemDooId = document.getElementById('id5');
    const elemDzpoId = document.getElementById('id6');
    const elemZoId = document.getElementById('id7');
    const elemSum567Id = document.getElementById('id8');
    const elemId9 = document.getElementById('id9');
    const elemId10 = document.getElementById('id10');
    const elemId11 = document.getElementById('id11');
    const elemId12 = document.getElementById('id12');

    //logic
    const x5 = salary <= 3000 ? salary * 0.0838 : 3000 * 0.0838;
    const x6 = salary <= 3000 ? salary * 0.022 : 3000 * 0.022;
    const x7 = salary <= 3000 ? salary * 0.032 : 3000 * 0.032;
    const x8 = x5 + x6 + x7;
    const x9 = salary + exp * 0.006 * salary - x8;

    //output
    elemGross.innerHTML = salary;
    elemExp.innerHTML = exp * 0.006 * salary;
    elemSum12.innerHTML = salary + exp * 0.006 * salary;
    grossFlat.innerHTML = salary <= 3000 ? salary : 3000;
    elemDooId.innerHTML = x5;
    elemDzpoId.innerHTML = x6;
    elemZoId.innerHTML = x7;
    elemSum567Id.innerHTML = x8;
    elemId9.innerHTML = x9;
    elemId10.innerHTML = x9 * 0.1;
    elemId11.innerHTML = x8 + x9 * 0.1;
    elemId12.innerHTML = salary + exp * 0.006 * salary - (x8 + x9 * 0.1);

    //elemSalary.innerHTML = salary <= 3000 ? salary + salary * exp * 0.006 : 3000 + salary * exp * 0.006 + salary - 3000;
  }

  render() {
    return (
      <form name="calcForm">
        <fieldset>
          <legend>Калкулатор брутно/нетно възнаграждение:</legend>
          <label>
            Брутно възнаграждение: &nbsp;
            <input name="salaryGross" type="number" value={this.state.value} placeholder="amount" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Години трудов стаж: &nbsp;
            <input name="yearsExp" type="number" value={this.state.value} placeholder="amount" onChange={this.handleChange} />
          </label>
          <button type="button" onClick={this.handleClick}>
            Calc!
          </button>
          <br />
          <div className="displayPool">
            <p>
              1. Брутно възнаграждение:&nbsp; <label id="id1"> </label>
              <br />
              2. Трудов стаж X*0.6%:&nbsp; <label id="id2"> </label>
              <br />
              3. Сумарно(1+2):&nbsp; <label id="id3"> </label>
              <br />
              4. Осигурителен доход: &nbsp;
              <label id="id4"> </label>
              <br />
              5. Държавно общ. осиг.("Пенсии": 6.58%,"ОЗМ": 1.4%,"Безработица": 0.4%): &nbsp;
              <label id="id5"> </label>
              <br />
              6. Фонд ДЗПО в УПФ 2.20%: &nbsp;
              <label id="id6"> </label>
              <br />
              7. Здравно осигуряване 3.20%: &nbsp;
              <label id="id7"> </label>
              <br />
              8. Общо осиг. вноски(5+6+7): &nbsp;
              <label id="id8"> </label>
              <br />
              9. Данъчна основа за облагане(3-8): &nbsp;
              <label id="id9"> </label>
              <br />
              10. Данък доход (9*10%): &nbsp;
              <label id="id10"> </label>
              <br />
              11. Общо удръжки служител (8+10): &nbsp;
              <label id="id11"> </label>
              <br />
              12. Нетно(3-11): &nbsp;
              <label id="id12"> </label>
              <br />
            </p>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
