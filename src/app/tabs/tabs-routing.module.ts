import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolverService } from '../resolver/data-resolver.service';
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
        path: 'preferences',
        children: [
          {
            path: '',
            loadChildren: () => import('../preferences/preferences.module').then(m => m.PreferencesPageModule)
          }
        ]
      },
      { path: 'preferences/make-preference', loadChildren: '../preferences/make-preference/make-preference.module#MakePreferencePageModule' },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
