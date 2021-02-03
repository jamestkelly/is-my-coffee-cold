import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakePreferencePageRoutingModule } from './make-preference-routing.module';

import { MakePreferencePage } from './make-preference.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakePreferencePageRoutingModule
  ],
  declarations: [MakePreferencePage]
})
export class MakePreferencePageModule {}
