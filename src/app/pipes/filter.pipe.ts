import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restaurantsList:any[],filterString:String,propName:any):  any[] {
    const result:any=[]
    if(!restaurantsList || filterString=='' || propName==''){
      return restaurantsList
    }
   
    restaurantsList.forEach((restaurant:any)=>{
      if(restaurant[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(restaurant)
      }
    })
    return result
  }

}
