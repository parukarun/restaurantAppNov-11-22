import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css']
})
export class DeleteRestaurantComponent implements OnInit {
  restId: any;

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
      console.log(result['id']);
      this.restId=result['id']
    })
    this.api.DeleteRestaurant(this.restId)
    .subscribe(()=>{
      alert("Requested restaurant has been removed.....")
      this.router.navigateByUrl('')
    })
  }

}
