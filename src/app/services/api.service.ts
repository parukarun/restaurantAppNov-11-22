import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeleteRestaurantComponent } from '../delete-restaurant/delete-restaurant.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// variables

search = new BehaviorSubject("")


// dependency injection
  constructor(private api:HttpClient) { }

// userdefined function

// 1. get all restaurant list function

  getAllRestaurantsList(){
      // call api : http://localhost:3000/restaurants 
      // HTTP request - get - httpClient class - import HttpClientModule

     return this.api.get('http://localhost:3000/restaurants')
  }
  
// 2. to get a single restaurant detail
viewRestaurant(restId:any){
//  using rest id call api : http://localhost:3000/restaurants/retsID
// Http Request - get method
  return this.api.get('http://localhost:3000/restaurants/'+restId)
}

// 3. To add new restaurant detail

  addRestaurant(newRestaurant:any){
   return this.api.post('http://localhost:3000/restaurants/',newRestaurant)
  }

  //4. to updater particular restaurant
  updateRestaurant(restId:any,updatedRestBody:any){
    return this.api.put('http://localhost:3000/restaurants/'+restId,updatedRestBody)
  }

  //5. to delete particular restaurant
  DeleteRestaurant(restId:any){
    return this.api.delete('http://localhost:3000/restaurants/'+restId)
  }
}
