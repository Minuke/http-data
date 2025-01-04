import { Component, inject } from '@angular/core';
import { tap } from 'rxjs';
import { Todo } from '../../interfaces/todo.interface';
import { SubscribeTodoService } from '../../services/subscribe-todo.service';

@Component({
  selector: 'app-subscribe-todo',
  imports: [],
  templateUrl: './subscribe-todo.component.html',
  styleUrl: './subscribe-todo.component.scss'
})
export class SubscribeTodoComponent {

  private readonly subscribeTodoService = inject(SubscribeTodoService);

  public todos: Todo[] = [];
  ngOnInit(): void {
    this.subscribeTodoService
      .getTodos()
      .pipe(tap((todos: Todo[]) => (this.todos = todos)))
      .subscribe();
  }
}
