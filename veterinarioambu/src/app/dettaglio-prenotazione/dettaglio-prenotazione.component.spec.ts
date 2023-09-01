import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioPrenotazioneComponent } from './dettaglio-prenotazione.component';

describe('DettaglioPrenotazioneComponent', () => {
  let component: DettaglioPrenotazioneComponent;
  let fixture: ComponentFixture<DettaglioPrenotazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglioPrenotazioneComponent]
    });
    fixture = TestBed.createComponent(DettaglioPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
