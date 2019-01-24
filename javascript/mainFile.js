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
  let myTask = [];
  if ("assignTask" in projectName === false) {
    myTask.push(taskName);
    projectName["assignTask"] = myTask;
    projectName["endDate"] = taskName.timeDuration + projectName.slacktime;
    return projectName;
  } else if (projectName.assignTask.length >= 1) {
    let assignMore = projectName.assignTask.concat(taskName);
    projectName.assignTask = assignMore;
    projectName["endDate"] += taskName.timeDuration;
    return projectName;
  }
}

//assign an employee a project
function taskToEmployee(employee, addProject) {
  let myArray = [];
  if ("project" in employee === false) {
    myArray.push(addProject);
    employee["project"] = myArray;
    return employee;
  } else if (employee["project"].length >= 1) {
    let addproject = employee.project.concat(addProject);
    employee["project"] = addproject;
    return employee;
  } else if (employee["project"].length == 2) {
    alert(
      "ProjectName already exist and employee project project maximum is reached"
    );
  }
}

// delete task from a project and underlining task
function deleteTaskFromProject(projectName, employees) {
  delete projectName.assignTask;
  delete projectName.endDate;
  let x;
  for (x in employees) {
    //remove all trace of removed task from individual employees
    if (employees.x.project == projectName) {
      delete employees.x.project.assignTask;
      return employees;
    }
  }
  return projectName;
}

// delete a project and other underlining project
function deleteProject(projects, projectName, employees) {
  delete projects.projectName;
  let x;
  for (x in employees) {
    //remove all trace of removed project from individual employees
    if (employees.x.project == projectName) {
      delete employees.x.project;
      return employees;
    }
  }
  return projects;
}

// display all projects
function displayEmployee(employees) {
  return employees;
}

//dispaly all task in a given project
function displayAllTask(projectName) {
  return projectName.assignTask;
}
//call the projects and assign task to it
let task = tasks.task1;
let projectname = projects.project1;
let updatepro = assignProject(task, projectname);
console.log(projects);

let task2 = tasks.task1;
let projectname2 = projects.project2;
let updatepro2 = assignProject(task2, projectname2);
//console.log(updatepro2);

// test if project is assigned to employee
let getProject2 = projects.project2;
let getEmployee1 = employees.employee1;
let updateEmployee1 = taskToEmployee(getEmployee1, getProject2);
console.log(updateEmployee1);

let getProject1 = projects.project1;
let getEmployee2 = employees.employee2;
let updateEmployee2 = taskToEmployee(getEmployee2, getProject1);

let getProject3 = projects.project2;
let getEmployee = employees.employee2;
let updateEmployee = taskToEmployee(getEmployee, getProject3);
console.log(updateEmployee);

let getProjectName = projects.project1;
let updateproject = deleteTaskFromProject(getProjectName);
console.log(updatepro);

console.log(displayEmployee(employees));

let displayAllTaskin = projects.project2;
console.log(displayAllTask(displayAllTaskin));
