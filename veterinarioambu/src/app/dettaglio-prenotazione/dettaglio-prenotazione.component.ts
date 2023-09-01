import { Component, Input } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';

@Component({
  selector: 'app-dettaglio-prenotazione',
  templateUrl: './dettaglio-prenotazione.component.html',
  styleUrls: ['./dettaglio-prenotazione.component.css']
})
export class DettaglioPrenotazioneComponent {
  @Input() prenotazione: Prenotazione;
}
