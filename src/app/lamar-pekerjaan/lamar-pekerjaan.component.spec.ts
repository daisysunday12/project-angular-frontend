import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamarPekerjaanComponent } from './lamar-pekerjaan.component';

describe('LamarPekerjaanComponent', () => {
  let component: LamarPekerjaanComponent;
  let fixture: ComponentFixture<LamarPekerjaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamarPekerjaanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamarPekerjaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
