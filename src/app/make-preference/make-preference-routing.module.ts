import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakePreferencePage } from './make-preference.page';

const routes: Routes = [
  {
    path: '',
    component: MakePreferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakePreferencePageRoutingModule {}
