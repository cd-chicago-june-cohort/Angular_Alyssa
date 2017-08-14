import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DCComponent } from './dc/dc.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/chicago'}, 
  {path: 'burbank', component: BurbankComponent},
  {path: 'chicago', component: ChicagoComponent},
  {path: 'dallas', component: DallasComponent},
  {path: 'dc', component: DCComponent},
  {path: 'san-jose', component: SanJoseComponent},
  {path: 'seattle', component: SeattleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
