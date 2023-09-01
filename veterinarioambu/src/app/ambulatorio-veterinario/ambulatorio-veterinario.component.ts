import { Component } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';

@Component({
  selector: 'app-ambulatorio-veterinario',
  templateUrl: './ambulatorio-veterinario.component.html',
  styleUrls: ['./ambulatorio-veterinario.component.css']
})
export class AmbulatorioVeterinarioComponent {
  prenotazioni: Prenotazione[] = [];
  dettagliVisibili = false;
  prenotazioneSelezionata: Prenotazione | null = null;

  aggiungiPrenotazione(prenotazione: Prenotazione) {
    this.prenotazioni.unshift(prenotazione); 
  }

  mostraDettagli(index: number) {
    this.prenotazioneSelezionata = this.prenotazioni[index];
    this.dettagliVisibili = true;
  }

  cancellaPrenotazione(index: number) {
    this.prenotazioni.splice(index, 1);
  }
}
