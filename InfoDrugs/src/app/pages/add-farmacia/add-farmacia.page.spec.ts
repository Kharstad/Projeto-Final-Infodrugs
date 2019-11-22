import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFarmaciaPage } from './add-farmacia.page';

describe('AddFarmaciaPage', () => {
  let component: AddFarmaciaPage;
  let fixture: ComponentFixture<AddFarmaciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFarmaciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFarmaciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
