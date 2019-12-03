  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
  })
  export class EmployeesComponent{

    title = 'Iris Software';

    productList=[
      {
        'productId':'P101',
        'productName':'Mobile',
        'productPrice':'15000'
      },
      {
        'productId':'P102',
        'productName':'Shoe',
        'productPrice':'20000'
      },
      {
        'productId':'P103',
        'productName':'electronics',
        'productPrice':'3000'
      },
      {
        'productId':'P104',
        'productName':'kitchen',
        'productPrice':'30000'
      },
    
    ];

    addProduct(pId,pName,pPrice){
      let products={
        
      'productId':pId,
        'productName':pName,
        'productPrice':pPrice
      };
    this.productList.push(products);
  }
  removeRow(pId){
    for(let i=0; i<this.productList.length;++i){
      if(this.productList[i].productId==pId){
        this.productList.splice(i,1);
      }
    } 
  }

  selectedValue:string;
  valueChoosen(event:any)
  {
      this.selectedValue=event.target.value;
      console.log(this.selectedValue);
  }

    }


