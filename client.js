let monthlyCosts = 0;
let employees = [];
let newGuy;

class Employee {
  constructor(name, id, title, salary) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.salary = salary;
  }
}

$(document).ready(function(){
  $('#submitButton').on('click', function() {
    let validID = true;
    for (let employee of employees) {
      if ($(idIn).val() == employee.id) {
        window.alert('ID Number in use. Please try again.');
        validID = false;
      }
    }
    if (validID) {
      addEmp();
      updateCosts(Number($(salaryIn).val())/12);
      clearFields();
    }
  });
  $('#employeeTable').on('click', '.deleteButton', function() {
    newGuy = false;
    let currentRow = $(this).parent().parent();
    let id = currentRow.find('td').eq(2).text();
    let salaryToRemove;
    for (i = 0; i < employees.length; i++) {
      if (employees[i].id == id) {
        salaryToRemove = Number(employees[i].salary)/12;
        employees.splice(i,1);
        break;
      }
    }
    updateCosts(salaryToRemove);
    currentRow.remove();
  });
});

function addEmp() {
  let firstName = $(firstNameIn).val();
  let lastName = $(lastNameIn).val();
  let id = $(idIn).val();
  let title = $(titleIn).val();
  sal = parseFloat($(salaryIn).val()).toFixed(2);
  $('#empData').append('<tr class="anEmployee"><td>'+firstName+
  '</td><td>'+lastName+'</td><td>'+
  id+'</td><td>'+title+'</td><td>$'+formatDollars(sal)+
  '</td><td><button class="deleteButton">Delete Employee</button></td></tr>');
  let name = firstName+' '+lastName;
  let emp = new Employee(name, id, title, sal);
  employees.push(emp);
  newGuy = true;
}

function updateCosts(amount) {
    if (newGuy) {
      let newCost = amount;
      monthlyCosts = parseFloat(newCost+Number(monthlyCosts)).toFixed(2);
    }
    else {
      let oldCost = amount;
      monthlyCosts = parseFloat(Number(monthlyCosts)-oldCost).toFixed(2);
    }
  $('#monthlyTot').empty();
  if (monthlyCosts > 20000) {
    $('#monthlyTot').append('<p style="background-color: red;">Total Monthly Cost: $'+
    formatDollars(monthlyCosts)+'</p>');
  }
  else {
    $('#monthlyTot').append('<p>Total Monthly Cost: $'+formatDollars(monthlyCosts)+'</p>');
  }
}

function formatDollars(amount) {
  amount = amount.toString();
  let toFormat = amount.split('.');
  if (toFormat[0].length >= 4) {
    dollars = toFormat[0].split('');
    dollars.splice(-3,0,',');
    toFormat[0] = dollars.join('');
    let formatted = toFormat.join('.');
    return formatted;
  }
  else {
    return amount;
  }
}

function clearFields() {
  $(firstNameIn).val('');
  $(lastNameIn).val('');
  $(idIn).val('');
  $(titleIn).val('');
  $(salaryIn).val('');
}
