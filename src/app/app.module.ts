import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { StudentComponent } from './student/student/student.component';
import {FormsModule} from '@angular/forms';
import { ReverStringPipe } from './rever-string.pipe';
import {Pipe,PipeTransform} from '@angular/core';
import { CheckGenderPipe } from './check-gender.pipe';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { GendercheckPipe } from './gendercheck.pipe';
import { PowerBoosterComponent } from './powerBooster/power-booster/power-booster.component';
import { PowerchekPipe } from './powerchek.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    StudentComponent,
    ReverStringPipe,
    CheckGenderPipe,
    NewEmpComponent,
    GendercheckPipe,
    PowerBoosterComponent,
    PowerchekPipe,
    DashboardComponent,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
