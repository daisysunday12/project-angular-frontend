import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamarPekerjaan1Component } from './lamar-pekerjaan1.component';

describe('LamarPekerjaan1Component', () => {
  let component: LamarPekerjaan1Component;
  let fixture: ComponentFixture<LamarPekerjaan1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamarPekerjaan1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamarPekerjaan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
