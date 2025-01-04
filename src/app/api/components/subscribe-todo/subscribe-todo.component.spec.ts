import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeTodoComponent } from './subscribe-todo.component';

describe('SubscribeTodoComponent', () => {
  let component: SubscribeTodoComponent;
  let fixture: ComponentFixture<SubscribeTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
