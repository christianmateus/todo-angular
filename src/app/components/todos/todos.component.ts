import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [{
      content: "Todo item",
      completed: false
    }
    ]
  }

  // Método que verifica se a tarefa está concluída
  toggleDone(id: any): void {
    this.todos.map((value, index) => {
      if (index == id) value.completed = !value.completed;
      return value;
    })
  }

  // Método para adicionar uma nova tarefa no array
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "" // Limpa o input após adicionar
  }

  // Método para remover uma nova tarefa do array
  deleteTodo(id: number) {
    this.todos.splice(id, 1);
  }
}
