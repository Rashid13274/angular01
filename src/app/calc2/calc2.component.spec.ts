import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calc2Component } from './calc2.component';

describe('Calc2Component', () => {
  let component: Calc2Component;
  let fixture: ComponentFixture<Calc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calc2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
