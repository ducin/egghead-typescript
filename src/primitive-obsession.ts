import { Employee, Project, Office } from "./model";

declare const employee: Employee;
declare const project: Project;
declare const office: Office;

const value =
  employee.salary +
  project.budget +
  office.estate.monthlyRental +
  employee.personalInfo.age;

declare function findEmployeeBySkills(
  skill: string
): Employee;

findEmployeeBySkills(employee.firstName);
