import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTodoComponent } from './resource-todo.component';

describe('ResourceTodoComponent', () => {
  let component: ResourceTodoComponent;
  let fixture: ComponentFixture<ResourceTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
