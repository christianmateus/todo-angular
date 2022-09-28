import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  inputTodo: string = "";
  // chave: number = this.todos.length;

  constructor(public storage: LocalStorageService) { }

  ngOnInit(): void {
    this.todos = [{ // Array de todas as tarefas para listar
      content: "Tarefa 01",
      completed: false
    }, {
      content: "Tarefa 02",
      completed: true
    },
      //{  // Essa linha abaixo deveria puxar a key do localStorage e imprimir o valor
      //   content: this.storage.get(String(this.todos.length)), // Não descobri por que não funciona
      //   completed: false
      // },
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

    this.storage.set(String(this.todos.length), this.inputTodo);
    this.inputTodo = "" // Limpa o input após adicionar
  }

  // Método para remover uma nova tarefa do array
  deleteTodo(id: number) {
    this.todos.splice(id, 1);
  }
}
