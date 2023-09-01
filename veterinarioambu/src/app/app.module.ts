import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmbulatorioVeterinarioComponent } from './ambulatorio-veterinario/ambulatorio-veterinario.component';
import { PrenotazioneFormComponent } from './prenotazione-form/prenotazione-form.component';
import { DettaglioPrenotazioneComponent } from './dettaglio-prenotazione/dettaglio-prenotazione.component';

@NgModule({
  declarations: [
    AppComponent,
    AmbulatorioVeterinarioComponent,
    PrenotazioneFormComponent,
    DettaglioPrenotazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
