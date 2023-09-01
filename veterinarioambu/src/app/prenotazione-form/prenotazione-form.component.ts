import { Component, Output, EventEmitter } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';

@Component({
  selector: 'app-prenotazione-form',
  templateUrl: './prenotazione-form.component.html',
  styleUrls: ['./prenotazione-form.component.css']
})
export class PrenotazioneFormComponent {
  @Output() nuovaPrenotazione = new EventEmitter<Prenotazione>();

  dataPrestazione: string = '';
  oraPrestazione: string = '';
  nomeProprietario: string = '';
  cognomeProprietario: string = '';
  telefonoProprietario: string = '';
  tipoAnimale: string = '';
  tipoPrestazione: string = '';
  annotazioni: string = '';

  submitForm() {
    const prenotazione: Prenotazione = {
      dataPrestazione: this.dataPrestazione,
      oraPrestazione: this.oraPrestazione,
      nomeProprietario: this.nomeProprietario,
      cognomeProprietario: this.cognomeProprietario,
      telefonoProprietario: this.telefonoProprietario,
      tipoAnimale: this.tipoAnimale,
      tipoPrestazione: this.tipoPrestazione,
      annotazioni: this.annotazioni
    };

    this.nuovaPrenotazione.emit(prenotazione);

    this.dataPrestazione = '';
    this.oraPrestazione = '';
    this.nomeProprietario = '';
    this.cognomeProprietario = '';
    this.telefonoProprietario = '';
    this.tipoAnimale = '';
    this.tipoPrestazione = '';
    this.annotazioni = '';
  }
}
