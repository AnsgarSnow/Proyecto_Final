import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Div1Component } from './div1.component';

describe('Div1Component', () => {
  let component: Div1Component;
  let fixture: ComponentFixture<Div1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Div1Component]
    });
    fixture = TestBed.createComponent(Div1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
