import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFarmaciaComponent } from './add-farmacia.component';

describe('AddFarmaciaComponent', () => {
  let component: AddFarmaciaComponent;
  let fixture: ComponentFixture<AddFarmaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFarmaciaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
