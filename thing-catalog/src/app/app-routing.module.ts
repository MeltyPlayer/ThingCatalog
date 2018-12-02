import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThingComponent }      from './thing/thing.component';

const routes: Routes = [{
  path: 'thing', component: ThingComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
