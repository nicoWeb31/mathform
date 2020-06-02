import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static addition(target: string,srcA: string, srcB: string){
      return (form: AbstractControl)=>{

        const  sum = form.value[target];
        const a = form.value[srcA]
        const b = form.value[srcB]

        if( a + b === parseInt(sum)){
          return null;
        }

        return {addition:true}
      }

      }

}
