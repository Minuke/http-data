import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeTodoComponent } from './async-pipe-todo.component';

describe('AsyncPipeTodoComponent', () => {
  let component: AsyncPipeTodoComponent;
  let fixture: ComponentFixture<AsyncPipeTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncPipeTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncPipeTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
