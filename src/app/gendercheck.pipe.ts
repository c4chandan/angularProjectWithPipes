import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gendercheck'
})
export class GendercheckPipe implements PipeTransform {

  transform(value: any,param:string): any {
    let listItem =[];
    value.forEach(i => {
      if(i.gender.toLowerCase()==param.toLowerCase()) {
        listItem.push(i);
      }
    });
    return listItem;
  }

}
