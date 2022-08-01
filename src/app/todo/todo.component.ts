import { Component, OnInit } from '@angular/core';

import { data } from '../dataobj';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   todos: data[];
   newitem: string;
   toggleOn = '';
   newitemdescription : string;
  constructor() { }

  ngOnInit(): void {
    this.todos= [
      {
        item: 'soaps',
        description: 'for bathing',
        time: new Date().toString().slice(0,24),
        picked: false,
    },{
      item: 'brush',
      description: 'for bathing',
      time: new Date().toString().slice(0,24),
      picked: false,
  }
    ]
    console.log(this.todos)
  }
  deleteitem(id) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  itempicked(id) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.picked = !v.picked;
      }
      return v;
    });
  }

  additem() {
    let currentTime = new Date().toString()
    currentTime = currentTime.slice(0,24)
    this.todos.push({
      item: this.newitem,
      picked: false,
      time : currentTime,
      description : this.newitemdescription
    });
    this.newitem = '';
    this.newitemdescription = ''
  }

}
