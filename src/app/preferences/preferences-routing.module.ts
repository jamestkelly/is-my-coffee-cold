import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreferencesPage } from './preferences.page';

const routes: Routes = [
  {
    path: '',
    component: PreferencesPage,
  },
  {
    path: 'make-preference',
    loadChildren: () => import('./make-preference/make-preference.module').then( m => m.MakePreferencePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferencesPageRoutingModule {}
