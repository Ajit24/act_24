import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { FormsComponent } from './forms/forms.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { ClusterComponent } from './cluster/cluster.component';
import { ExactfaqComponent } from './exactfaq/exactfaq.component';
import { RoasterComponent } from './roaster/roaster.component';
import { GraphComponent } from './graph/graph.component';
import { DownloadComponent } from './download/download.component';



const routes: Routes = [
// {path: '*', redirectTo:'/content', pathMatch:'full'},
{ path: 'content', component: ContentComponent },
{path:'add-emp', component:AddEmployeeComponent},
{path:'ifelse', component: IfelseComponent},
{path:'forms', component:FormsComponent},
{path:'search', component:SearchComponent},
{path:'product', component:ProductComponent},
{path:'cluster', component:ClusterComponent},
{path:'exactfaq', component:ExactfaqComponent},
{path:'roaster', component:RoasterComponent},
{path:'graph', component: GraphComponent},
{path:'download', component: DownloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
