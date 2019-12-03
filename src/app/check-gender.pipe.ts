import { Pipe, PipeTransform } from '@angular/core';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Pipe({
  name: 'checkGender'
})
export class CheckGenderPipe implements PipeTransform {

  transform(value: any, param:string):string {
    console.log('I m Transform..');
    if(param.toLowerCase()=='male')
    {
      return "Mr. "+value;
    }

    return "Miss. "+value;
  }

}
