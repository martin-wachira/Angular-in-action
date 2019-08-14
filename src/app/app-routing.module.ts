import { ManageComponent } from './components/manage/manage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SummaryComponent } from './components/summary/summary.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'manage', component: ManageComponent},
  {path: 'summary', component: SummaryComponent},
];

export const AppRoutes = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
