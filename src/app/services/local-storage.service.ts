import { Injectable } from '@angular/core';
import { TodosComponent } from '../components/todos/todos.component';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  get(key: string) {
    this.storage.getItem(key);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }
}
