import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverString'
})
export class ReverStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    let newString="";
    for(var i=value.length-1;i>=0;i--)
    {
      newString +=value.charAt(i);
    }
    
    return newString;
  }

}
