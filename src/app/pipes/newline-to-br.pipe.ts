import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newlineToBr'
})
export class NewlineToBrPipe implements PipeTransform {

  transform (value: string): string {
    if (!value) return value; // Return empty if value is falsy
    return value.replace(/\n/g, '<br>'); // Replace all newlines with <br> tags
  }

}
