import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilFarmaciaPage } from './perfil-farmacia.page';

describe('PerfilFarmaciaPage', () => {
  let component: PerfilFarmaciaPage;
  let fixture: ComponentFixture<PerfilFarmaciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilFarmaciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilFarmaciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
