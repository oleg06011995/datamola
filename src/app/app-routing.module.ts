import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestModule } from './components/test/test.module';


const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  { path: 'test', loadChildren: () => TestModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
