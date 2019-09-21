import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashComponent } from './my-dash.component';

describe('MyDashComponent', () => {
  let component: MyDashComponent;
  let fixture: ComponentFixture<MyDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
