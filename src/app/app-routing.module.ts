import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkItemsComponent} from "./client-component/work-items/work-items.component";
import { ContactComponent } from "./client-component/contact/contact.component";
import { HeaderComponentComponent } from "./client-component/header-component/header-component.component";
import { AdminComponent } from "./admin-component/admin/admin.component";
import {PostComponent} from "./admin-component/post/post.component";


const routes: Routes = [
    {path: '', component: HeaderComponentComponent},
    {path:'work', component: WorkItemsComponent},
    {path:'contact', component: ContactComponent},
    {path: 'admin', component: AdminComponent },
    {path: 'post', component:  PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
