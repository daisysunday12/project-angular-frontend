import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamarPekerjaan2Component } from './lamar-pekerjaan2.component';

describe('LamarPekerjaan2Component', () => {
  let component: LamarPekerjaan2Component;
  let fixture: ComponentFixture<LamarPekerjaan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamarPekerjaan2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamarPekerjaan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
