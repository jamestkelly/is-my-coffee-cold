import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPreferencePage } from './edit-preference.page';

describe('EditPreferencePage', () => {
  let component: EditPreferencePage;
  let fixture: ComponentFixture<EditPreferencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPreferencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPreferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
