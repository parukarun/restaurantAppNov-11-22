import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {

  // to hold restaurant list
  restaurantsList:any = []

  //to hold searchTerm
  searchTerm=""

  // dependency injection
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    // api call - asyncronous call - resolve state - subscribe()
    this.apiService.getAllRestaurantsList()
    .subscribe((result)=>{
      this.restaurantsList = result
       console.log(this.restaurantsList);
    })

    //to get searchTerm from api service
    this.apiService.search.subscribe((data)=>{
      console.log(data);
      
      this.searchTerm = data
    })
  }

}
