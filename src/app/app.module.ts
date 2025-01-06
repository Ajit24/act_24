import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterLink } from '@angular/router';
import { IfelseComponent } from './ifelse/ifelse.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { ClusterComponent } from './cluster/cluster.component';
import { ExactfaqComponent } from './exactfaq/exactfaq.component';
import { RoasterComponent } from './roaster/roaster.component'; 
import {TableModule} from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphComponent } from './graph/graph.component';
import { NgChartsModule } from 'ng2-charts';
import { DownloadComponent } from './download/download.component';
import { ScrollComponent } from './scroll/scroll.component';
import { CounterComponent } from './counter/counter.component';
import { PostComponent } from './post/post.component';
import { CountertimerComponent } from './countertimer/countertimer.component';
import { TransferlistComponent } from './transferlist/transferlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    AddEmployeeComponent,
    FormsComponent,
    SearchComponent,
    ProductComponent,
    ClusterComponent,
    ExactfaqComponent,
    RoasterComponent,
    GraphComponent,
    DownloadComponent,
    ScrollComponent,
    CounterComponent,
    PostComponent,
    CountertimerComponent,
    TransferlistComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    TableModule,PaginatorModule,  DialogModule,
    DropdownModule,BrowserAnimationsModule,NgChartsModule,CommonModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
