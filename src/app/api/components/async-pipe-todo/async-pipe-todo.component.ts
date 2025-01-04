import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../interfaces/todo.interface';
import { AsyncPipeTodoService } from '../../services/async-pipe-todo.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-async-pipe-todo',
  imports: [AsyncPipe],
  templateUrl: './async-pipe-todo.component.html',
  styleUrl: './async-pipe-todo.component.scss'
})
export class AsyncPipeTodoComponent {

  private readonly asyncPipeTodoService = inject(AsyncPipeTodoService);

  public todos$: Observable<Todo[]> = this.asyncPipeTodoService.getTodos();;

}
