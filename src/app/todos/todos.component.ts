import { Component, OnInit } from '@angular/core';
import {CreateTodoMutation} from '../API.service';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  private Todoform: FormGroup;
  constructor() { }   
  ngOnInit() {
  //   this.Todoform = new FormGroup({ Description: new FormControl('Description', Validators.required)    
  // });
      this.Todoform = new FormGroup({
        Description: new FormControl('', Validators.required),
    });
  }
  createtodo()
  {
    
    console.log(this.Todoform.get('Description').value);
  }
  
}
