import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { GizmoComponent } from './gizmo/gizmo.component';
import { WidgetsComponent } from './widgets/widgets-component';
import { ReviewComponent } from './review/review.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'items/:id', component: ItemComponent },
  { path: 'gizmo', component: GizmoComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'reviews', component: ReviewComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
