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
import { ScrollComponent } from './scroll/scroll.component';
import { CounterComponent } from './counter/counter.component';
import { PostComponent } from './post/post.component';
import { CountertimerComponent } from './countertimer/countertimer.component';



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
{path:'download', component: DownloadComponent},
{path:'scroll', component:ScrollComponent},
{path:'counter', component:CounterComponent},
{path:'post', component:PostComponent},
{path:'countertimer', component :CountertimerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
