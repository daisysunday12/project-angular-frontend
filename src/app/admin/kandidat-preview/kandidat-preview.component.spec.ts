import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KandidatPreviewComponent } from './kandidat-preview.component';

describe('KandidatPreviewComponent', () => {
  let component: KandidatPreviewComponent;
  let fixture: ComponentFixture<KandidatPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KandidatPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KandidatPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
