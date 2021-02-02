import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'calculator',
        loadChildren: () => import('../calculator/calculator.module').then(m => m.CalculatorPageModule)
      },
      {
        path: 'options',
        loadChildren: () => import('../preferences/preferences.module').then(m => m.PreferencesPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/calculator',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calculator',
    pathMatch: 'full'
  },
  {
    path: 'make-preference',
    loadChildren: () => import('../make-preference/make-preference.module').then( m => m.MakePreferencePageModule)
  },
  {
    path: 'edit-preference',
    loadChildren: () => import('../edit-preference/edit-preference.module').then( m => m.EditPreferencePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
