import React from 'react';

const Table = props => {
  const salary = parseInt(props.salary);
  const exp = parseInt(props.exp);

  //logic
  const stateComIns = salary <= 3000 ? salary * 0.0838 : 3000 * 0.0838;
  const dzpo = salary <= 3000 ? salary * 0.022 : 3000 * 0.022;
  const zo = salary <= 3000 ? salary * 0.032 : 3000 * 0.032;
  const comInsPayment = stateComIns + dzpo + zo;
  const doo = salary + exp * 0.006 * salary - comInsPayment;
  const labourExp = exp * 0.006 * salary;
  const summedGross = salary + labourExp;
  const insuranceIncome = summedGross <= 3000 ? summedGross : 3000;

  const flatIncomeTax = Math.round(doo * 0.1 * 100) / 100;
  const compensation = Math.round((comInsPayment + doo * 0.1) * 100) / 100;
  const netSalary = Math.round((salary + exp * 0.006 * salary - (comInsPayment + doo * 0.1)) * 100) / 100;

  return (
    <div className="displayPool">
      <table>
        <tbody>
          <tr>
            <td>1. Брутно възнаграждение:</td>
            <td>
              <label>{salary} </label>
            </td>
          </tr>
          <tr>
            <td>2. Трудов стаж X*0.6%:</td>
            <td>
              <label>{Math.round(labourExp * 100) / 100} </label>
            </td>
          </tr>
          <tr>
            <td>3. Сумарно(1+2):</td>
            <td>
              <label> {summedGross}</label>
            </td>
          </tr>
          <tr>
            <td>4. Осигурителен доход:</td>
            <td>
              <label>{insuranceIncome} </label>
            </td>
          </tr>
          <tr>
            <td>5. Държавно общ. осиг.("Пенсии": 6.58%,"ОЗМ": 1.4%,"Безработица": 0.4%):</td>
            <td>
              <label>{Math.round(stateComIns * 100) / 100}</label>
            </td>
          </tr>
          <tr>
            <td>6. Фонд ДЗПО в УПФ 2.20%:</td>
            <td>
              <label> {Math.round(dzpo * 100) / 100}</label>
            </td>
          </tr>
          <tr>
            <td>7. Здравно осигуряване 3.20%:</td>
            <td>
              <label>{zo} </label>
            </td>
          </tr>
          <tr>
            <td>8. Общо осиг. вноски(5+6+7):</td>
            <td>
              <label>{Math.round(comInsPayment * 100) / 100}</label>
            </td>
          </tr>
          <tr>
            <td>9. Данъчна основа за облагане(3-8):</td>
            <td>
              <label>{Math.round(doo * 100) / 100}</label>
            </td>
          </tr>
          <tr>
            <td>10. Данък доход (9*10%):</td>
            <td>
              <label>{flatIncomeTax} </label>
            </td>
          </tr>
          <tr>
            <td>11. Общо удръжки служител (8+10):</td>
            <td>
              <label>{compensation}</label>
            </td>
          </tr>
          <tr>
            <td>12. Нетно(3-11):</td>
            <td>
              <label>{netSalary} </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
