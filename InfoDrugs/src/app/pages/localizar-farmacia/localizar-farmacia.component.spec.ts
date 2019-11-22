import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalizarFarmaciaComponent } from './localizar-farmacia.component';

describe('LocalizarFarmaciaComponent', () => {
  let component: LocalizarFarmaciaComponent;
  let fixture: ComponentFixture<LocalizarFarmaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizarFarmaciaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalizarFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
