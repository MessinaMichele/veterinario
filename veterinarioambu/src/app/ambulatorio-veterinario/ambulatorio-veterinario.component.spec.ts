import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulatorioVeterinarioComponent } from './ambulatorio-veterinario.component';

describe('AmbulatorioVeterinarioComponent', () => {
  let component: AmbulatorioVeterinarioComponent;
  let fixture: ComponentFixture<AmbulatorioVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmbulatorioVeterinarioComponent]
    });
    fixture = TestBed.createComponent(AmbulatorioVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
