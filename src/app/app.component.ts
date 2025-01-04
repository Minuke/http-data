import { Component, inject } from '@angular/core';
import { SubscribeTodoComponent } from './api/components/subscribe-todo/subscribe-todo.component';
import { AsyncPipeTodoComponent } from './api/components/async-pipe-todo/async-pipe-todo.component';
import { SignalTodoComponent } from './api/components/signal-todo/signal-todo.component';
import { ResourceTodoComponent } from './api/components/resource-todo/resource-todo.component';

@Component({
  selector: 'app-root',
  imports: [SubscribeTodoComponent, AsyncPipeTodoComponent, SignalTodoComponent, ResourceTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
