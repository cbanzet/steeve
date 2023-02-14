import { Pipe, PipeTransform } from '@angular/core';
import { HeroSt } from './model/hero';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  heroesList : HeroSt[] = [];

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();

    return value.filter((item : any) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }

}
