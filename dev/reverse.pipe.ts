import {Pipe} from 'angular2/core';
import {PipeTransform} from 'angular2/core';

@Pipe({
    name: 'myReversePipe'
})

export class ReversePipe implements PipeTransform {

    transform(value: string, args:any[]) {
        const length = value.length;
        let resultString = '';

        for (let i = 0; i < length; i++) {
            resultString = value[i] + resultString;
        }
        return resultString;
    }
}
