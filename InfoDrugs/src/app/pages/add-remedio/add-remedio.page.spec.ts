import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRemedioPage } from './add-remedio.page';

describe('AddRemedioPage', () => {
  let component: AddRemedioPage;
  let fixture: ComponentFixture<AddRemedioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemedioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRemedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
