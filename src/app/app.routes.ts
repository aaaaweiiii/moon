import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Team } from './team/team';
import { Callus } from './callus/callus';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'team', component: Team },
  { path: 'callus', component: Callus },
  { path: '**', redirectTo: '' }
];