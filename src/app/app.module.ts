import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgmDataTableModule } from 'ngm-data-table';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgBusyModule } from 'ng-busy';
import { TeamplateComponent } from './cell/teamplate/teamplate.component';
import { HeaderExtraComponent } from './header/header-extra/header-extra.component';
import { HeaderTemplateComponent } from './header/header-template/header-template.component';
import { CustomIconExpandedComponent } from './responsive/custom-icon-expanded/custom-icon-expanded.component';
import { DefaultComponent } from './responsive/default/default.component';
import { TeamplateExpandComponent } from './responsive/teamplate-expand/teamplate-expand.component';
import { SimpleComponent } from './simple/simple/simple.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadingComponent,
    TeamplateComponent,
    HeaderExtraComponent,
    HeaderTemplateComponent,
    CustomIconExpandedComponent,
    DefaultComponent,
    TeamplateExpandComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgBusyModule,
    FormsModule,
    NgmDataTableModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
