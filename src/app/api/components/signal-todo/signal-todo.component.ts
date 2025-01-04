import { Component, computed, inject, Signal, WritableSignal } from '@angular/core';
import { SignalTodoService } from '../../services/signal-todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../../interfaces/todo.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-todo',
  imports: [],
  templateUrl: './signal-todo.component.html',
  styleUrl: './signal-todo.component.scss'
})
export class SignalTodoComponent {

  private readonly SignalTodoService = inject(SignalTodoService);

  public todos: WritableSignal<Todo[]> = toSignal(this.SignalTodoService.getTodos()) as WritableSignal<Todo[]>

}
