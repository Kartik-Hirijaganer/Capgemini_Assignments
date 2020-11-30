import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edit } from '../edit';
import { MainService } from '../main.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  constructor(private service: MainService, private router: Router) { }

  ngOnInit(): void {
  }

  editModel = new Edit('', '','', '','');

  onSubmit(value:any){
    console.log(value);
    
    // let newName = name;category
    let id = this.service.adverArr.indexOf(value.oldTitle) + 1;
    
    this.service.adverArr[id].title = value.title;
    this.service.adverArr[id].name = value.name;
    this.service.adverArr[id].title = value.category;
    this.service.adverArr[id].name = value.description;

    this.router.navigate(['']);
  }

}
