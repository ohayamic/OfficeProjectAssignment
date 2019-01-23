// create task for the projects
let tasks = {
  task1: new Task(5, "add component", "add a component that when the", true),
  task2: new Task(5, "add button", "button opens another window", false)
};

// create employees for the company
let employees = {
  employee1: new Employee("Michael", "Ohaya", "John"),
  employee2: new Employee("john", "james", "tony"),
  employee3: new Employee("johnny", "jammy", "anthony")
};

// create projects for the company
let projects = {
  project1: new Projects("android", "01:02:2019", 5),
  project2: new Projects("webapp", "01:01:2019", 5),
  project3: new Projects("website", "10:10:2019", 5)
};

//assign a task to project
function assignProject(taskName, projectName) {
  projectName["assignTask"] = taskName;
  //add an increment
  projectName["endDate"] = taskName.timeDuration + projectName.slacktime;
  return projectName;
}

function taskToEmployee(employee, addProject) {
  let myArray = [];
  if ("project" in employee === false) {
    myArray.push(addProject);
    employee["project"] = myArray;
    return employee;
  } else if ("project" in employee === true) {
    alert("ProjectName already exist choose another project ");
    if (employee["project"].length !== 2) {
      console.log(employee["project"].length);
      myArray.push(addProject);
      employee["project"] = myArray;
      return employee;
    }
  }
}

//call the projects and assign task to it
let task = tasks.task1;
let projectname = projects.project1;
let updatepro = assignProject(task, projectname);
//console.log(updatepro);

let task2 = tasks.task1;
let projectname2 = projects.project2;
let updatepro2 = assignProject(task2, projectname2);
//console.log(updatepro2);

// test if project is assigned to employee
let getProject1 = projects.project1;
let getEmployee1 = employees.employee1;
let updateEmployee1 = taskToEmployee(getEmployee1, getProject1);
console.log(updateEmployee1);

let getProject2 = projects.project2;
let getEmployee2 = employees.employee2;
let updateEmployee2 = taskToEmployee(getEmployee2, getProject2);
console.log(updateEmployee2);
console.log(employees);
