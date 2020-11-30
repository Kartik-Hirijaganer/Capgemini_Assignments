import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { User } from '../user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'advertisementformcomponent';
  categories=['Furniture','Hardware','Mobile'];

  searchText:string = '';

  categoryHasError=true;

  submitted=false;
  errorMsg='';

  Model=new User('','Kartik','','');

  constructor(public service: MainService, private router: Router) { }

  ngOnInit(): void {
  }

  categoryValidate(value:any){
     if(value==='default'){
       this.categoryHasError=true;
     }else{
       this.categoryHasError=false;
     }
  }

  // adArr = this.service.getList();
  onSubmit(userForm:any){
    this.service.adverArr.push(userForm.value);
  }

  
  onDelete(){
    let len = this.service.adverArr.length;
    this.service.adverArr = this.service.adverArr.splice(len-2, len-1);
  }

  onEdit(){
    this.router.navigate(['/formEdit']);
  }
}

