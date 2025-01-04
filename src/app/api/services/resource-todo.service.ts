import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource, ResourceRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourceTodoService {

  public getTodos: ResourceRef<Todo[]> = resource({ 
    loader: async () => { 
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
        if (!response.ok) { throw new Error('Network response was not ok'); }
        return await response.json();
      } catch (error) {
        console.error('Fetch error:', error);
        return [];
      } 
    }
  });
}
