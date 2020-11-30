import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})


export class RestaurantComponent implements OnInit {
  public choice:number=0;

  constructor(private route: ActivatedRoute, private router: Router, private restaurant: RestaurantService) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.choice = id;
  }

  list:string[] =this.restaurant.getList();

//add
onAdd(){
  this.router.navigate(['/form']);
}
onDelete(){
  this.router.navigate(['/formDelete']);
}

onEdit(){
  this.router.navigate(['/formEdit']);
}

}
