import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(convertString: string, character: string): string {
     return convertString.replace(character, ' ');
  }
}