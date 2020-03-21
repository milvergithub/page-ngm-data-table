import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LazyLoadingComponent} from './lazy-loading/lazy-loading.component';
import {HeaderTemplateComponent} from './header/header-template/header-template.component';
import {HeaderExtraComponent} from './header/header-extra/header-extra.component';
import {CustomIconExpandedComponent} from './responsive/custom-icon-expanded/custom-icon-expanded.component';
import {TeamplateExpandComponent} from './responsive/teamplate-expand/teamplate-expand.component';
import {DefaultComponent} from './responsive/default/default.component';
import {TeamplateComponent} from './cell/teamplate/teamplate.component';
import {SimpleComponent} from './simple/simple/simple.component';


const routes: Routes = [
  {path: 'simple', component: SimpleComponent},
  {path: 'header/header-template', component: HeaderTemplateComponent},
  {path: 'header/header-template-extra', component: HeaderExtraComponent},
  {path: 'cell/cell-template', component: TeamplateComponent},
  {path: 'responsive/default', component: DefaultComponent},
  {path: 'responsive/template', component: TeamplateExpandComponent},
  {path: 'responsive/custom-icon-expand', component: CustomIconExpandedComponent},
  {path: 'responsive/lazy-loading', component: LazyLoadingComponent},
  {path: '**', component: SimpleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
