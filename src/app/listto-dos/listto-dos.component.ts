import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targerDate: Date
  ){}
}

@Component({
  selector: 'app-listto-dos',
  templateUrl: './listto-dos.component.html',
  styleUrl: './listto-dos.component.css'
})
export class ListtoDosComponent {

  todos = [
    new Todo(1,'something', false, new Date()),
    new Todo(2,'nothing', false, new Date()),
    new Todo(3,'everything', false, new Date())
  ];

}
