import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkItemsComponent} from "./client-component/work-items/work-items.component";
import { ContactComponent } from "./client-component/contact/contact.component";
import { HeaderComponentComponent } from "./client-component/header-component/header-component.component";
import { AdminComponent } from "./admin-component/admin/admin.component";
import { PostComponent } from "./admin-component/post/post.component";
import { PostListComponent } from "./admin-component/post-list/post-list.component";


const routes: Routes = [
    {path: '', component: HeaderComponentComponent},
    {path:'work', component: WorkItemsComponent},
    {path:'contact', component: ContactComponent},
    {path: 'admin', component: AdminComponent,
        children: [
        {
            path: 'new',
            component: PostComponent,
            outlet: 'nameNew'
        },
        {
            path: 'view',
            component: PostListComponent,
            outlet: 'nameView'
        },
        {
            path: '',
            redirectTo: 'admin',
            pathMatch: 'full'
        }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
