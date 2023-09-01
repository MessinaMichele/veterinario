import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneFormComponent } from './prenotazione-form.component';

describe('PrenotazioneFormComponent', () => {
  let component: PrenotazioneFormComponent;
  let fixture: ComponentFixture<PrenotazioneFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrenotazioneFormComponent]
    });
    fixture = TestBed.createComponent(PrenotazioneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
