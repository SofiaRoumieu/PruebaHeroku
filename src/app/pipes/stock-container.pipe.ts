import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockContainer'
})
export class StockContainerPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    console.log(value);
    let productos="";
    if(value!=undefined && value.length>0){
      for (let index = 0; index < value.length; index++) {
        
        productos +="-"+ value[index].producto +", "+ value[index].stock+" unidades.";
      }
    }
    return productos;
  }

}
