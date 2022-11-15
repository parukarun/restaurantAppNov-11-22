import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {

  restId:Number = 0

  restDetailes:any = {}

  constructor(private activateRoute:ActivatedRoute , private apiService:ApiService) { }

  ngOnInit(): void {
    // to get parameter from url
    this.activateRoute.params.subscribe((result)=>{
      this.restId = result['id']
      console.log(this.restId);
      
    })

    // call api to get single restaurant detail
    this.apiService.viewRestaurant(this.restId)
    .subscribe((result)=>{
      this.restDetailes = result
      console.log(this.restDetailes);
      
    })

  }

}
