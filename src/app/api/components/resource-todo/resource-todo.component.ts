import { Component, computed, inject, ResourceRef, Signal } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { ResourceTodoService } from '../../services/resource-todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-todo',
  imports: [CommonModule],
  templateUrl: './resource-todo.component.html',
  styleUrls: ['./resource-todo.component.scss']
})
export class ResourceTodoComponent {

  private readonly resourceTodoService = inject(ResourceTodoService);
  
  public resource = this.resourceTodoService.getTodos;
  public todos: Signal<Todo[]> = computed(() => this.resource.value() || []);

}
