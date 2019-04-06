import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  /**
   * we want to sort the items which the condition
   * match the "visible" keyword AND is not empty AND exists
   *
   * @param {Array<any>} items
   * @param {{[p: string]: any}} conditions
   * @returns {Array<any>}
   */
  transform(items: Array<any>,
            conditions: {[field: string]: any}): Array<any> {
    return items.filter(item => {
      for (const field in conditions) {
        if (item[field] !== conditions[field]
          && conditions[field] !== '' && conditions[field]) {
          return false;
        }
      }
      return true;
    });
  }

}
