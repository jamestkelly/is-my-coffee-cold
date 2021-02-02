import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakePreferencePage } from './make-preference.page';

describe('MakePreferencePage', () => {
  let component: MakePreferencePage;
  let fixture: ComponentFixture<MakePreferencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakePreferencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakePreferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
