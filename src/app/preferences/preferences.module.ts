import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreferencesPage } from './preferences.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PreferencesPageRoutingModule } from './preferences-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PreferencesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PreferencesPage]
})
export class PreferencesPageModule {}
