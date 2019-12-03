import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  // cityList: any[] = [
  //   {
  //     "city": "Delhi",
  //     "student": [
  //       {
  //         "studentId": "101",
  //         "studentName": "gandharv",
  //       },

  //       {
  //         "studentId": "102",
  //         "studentName": "Sachin",
  //       },
  //       {
  //         "studentId": "103",
  //         "studentName": "Rahul",
  //       },
  //       {
  //         "studentId": "104",
  //         "studentName": "Hemant",
  //       }]
  //   },
  //   {
  //     "city": "Lucknow",
  //     "student": [
  //       {
  //         "studentId": "105",
  //         "studentName": "CHANDAN",
  //       },

  //       {
  //         "studentId": "106",
  //         "studentName": "RAJESH",
  //       },
  //       {
  //         "studentId": "107",
  //         "studentName": "ABHI",
  //       },
  //       {
  //         "studentId": "108",
  //         "studentName": "eTESH",
  //       },
  //     ]
  //   }



  // ];

userName:string='';
checkDisabled(){
  if(this.userName=='' )
  {
  return true;
 }
else
{
return false;
}
}

resetUserName(){
  this.userName='';
}

displayDetails=true;

showDetails()
{
  if(this.displayDetails===false)
  {
    return this.displayDetails=true;
  }
  else{
    return  this.displayDetails=false;
  }
}
countArr=[];
count=5;

onCount(){
     this.countArr.push(this.count)
      this.count = this.count + 1;
}

}