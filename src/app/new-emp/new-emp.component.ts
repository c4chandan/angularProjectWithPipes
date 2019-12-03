import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-emp',
  template: `
<br/>
  <div clas="container-fluid">
  <div class="row" align="center">
  <div class="col">
  <span style="color:red;font-size:20px;text-align:center;">Filter Accoding gender</span>
  </div>
  <div class="col">
  <input type="text" name="filter" placeholder="Search by Gender" [(ngModel)]="searchBygender" class="form-control"/>
  </div>
  <div class="search">
  <button type="button" class="btn btn-primary" (click)="searchBygender='';">Search</button>
  </div>
  </div>
  </div>
  <br/>
  <p class="alert alert-success" align="center">Employee Details</p>
  <table class="table table-responsive table-dark" >  <tr>
      <th>Employee Name</th>
      <th>Employee Description</th>
      <th>Employee Salary</th>
      <th>Employee Gender</th>
      <th>Employee DOJ</th>
      <th>Employee Appraisal</th>
</tr>
<tr *ngFor="let empObj of employeeDetails |gendercheck:searchBygender"> 
  <td>{{empObj.employeeName|uppercase|checkGender:empObj.gender:'male'}}</td>
  <td>{{empObj.employeeDesc}}</td>
  <td>{{empObj.employeeSalary|currency:'INR':'Rs.'}}</td>
  <td>{{empObj.gender}}</td>
  <td>{{empObj.employeeDOJ|date:fullDate}}</td>
  <td>{{empObj.employeeAppraisal|percent}}</td>

</tr>
</table>
  `,
  styles: []
})
export class NewEmpComponent {

  employeeDetails: any = [{
    'employeeName': 'Chandan Sharma',
    'employeeDesc': 'Get tranning',
    'employeeSalary': 15000,
    'gender': 'male',
    'employeeDOJ': new Date(2019, 8, 23),
    'employeeAppraisal': 1.25
  },
  {

    'employeeName': 'Gandharv ',
    'employeeDesc': 'Get tranning',
    'employeeSalary': 20000,
    'gender': 'male',
    'employeeDOJ': new Date(2019, 8, 23),
    'employeeAppraisal': 2.456
  },
  {

    'employeeName': 'Etesh',
    'employeeDesc': 'Get tranning',
    'employeeSalary': 35000,
    'gender': 'male',
    'employeeDOJ': new Date(2019, 8, 23),
    'employeeAppraisal': 1.45
  },
  {

    'employeeName': 'Shivani',
    'employeeDesc': 'Genpect',
    'employeeSalary': 45000,
    'gender': 'female',
    'employeeDOJ': new Date(2019, 5, 2),
    'employeeAppraisal': 2.25
  }

  ];


}
