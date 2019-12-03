import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerchek'
})
export class PowerchekPipe implements PipeTransform {

  transform(base:number, exponent:number): number {
    return Math.pow(base,exponent);

  }

}
