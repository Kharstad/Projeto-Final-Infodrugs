import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalogoPrecoPage } from './catalogo-preco.page';

describe('CatalogoPrecoPage', () => {
  let component: CatalogoPrecoPage;
  let fixture: ComponentFixture<CatalogoPrecoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoPrecoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoPrecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
