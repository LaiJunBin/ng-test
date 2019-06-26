import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NolazyComponent } from './nolazy/nolazy.component';
import { LazyModule } from './lazy/lazy.module';

const routes: Routes = [
  { path: '', redirectTo: 'nolazy', pathMatch: 'full' },
  { path: 'nolazy', component: NolazyComponent },
  { path: 'lazy', loadChildren: () => LazyModule },
  // { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(mod => mod.LazyModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
