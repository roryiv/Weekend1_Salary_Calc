let monthlyCosts = 0;
let employees = [];

class Employee {
  constructor(name, id, title, salary) {
    this.name = name;
    this.id = id;
    this.title = title;
    this. salary = salary;
  }
}

$(document).ready(function(){
  $('#submitButton').on('click', function() {
    addEmp();
    updateCosts();
    clearFields();
  });
  $('#employeeTable').on('click', '.deleteButton', function() {
    $(this).parent().parent().remove();
    console.log("Employee Deleted");
  });
});

function addEmp() {
  let firstName = $(firstNameIn).val();
  let lastName = $(lastNameIn).val();
  let id = $(idIn).val();
  let title = $(titleIn).val();
  let sal = $(salaryIn).val();
  $('#empData').append('<tr class="anEmployee"><td>'+firstName+
  '</td><td>'+lastName+'</td><td>'+
  id+'</td><td>'+title+'</td><td>$'+sal+
  '.00</td><td><button class="deleteButton">Delete Employee</button></td></tr>');
  let name = firstName+' '+lastName;
  let emp = new Employee(name, id, title, sal);
  employees.push(emp);
  sal = Number(sal)/12;
  monthlyCosts = parseFloat(sal+Number(monthlyCosts)).toFixed(2);
}

function updateCosts() {
  if (monthlyCosts > 20000) {
    $('#monthlyTot').empty();
    $('#monthlyTot').append('<p style="background-color: red;">Total Monthly Cost: $'+monthlyCosts+'</p>');
  }
  else {
    $('#monthlyTot').empty();
    $('#monthlyTot').append('<p>Total Monthly Cost: $'+monthlyCosts+'</p>');
  }
}

function clearFields() {
  $(firstNameIn).val('');
  $(lastNameIn).val('');
  $(idIn).val('');
  $(titleIn).val('');
  $(salaryIn).val('');
}
