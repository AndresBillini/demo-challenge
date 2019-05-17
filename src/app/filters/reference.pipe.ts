import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'referenceFilter'
})

export class referenceFilterPipe implements PipeTransform {
    transform(reference: any, variable: string): any {
        if (!reference || !variable) {
            return reference;
        }
        // tslint:disable-next-line:no-shadowed-variable
        return reference.filter(reference =>
            reference.token.toLowerCase().indexOf(variable.toLowerCase()) !== -1);
    }
}