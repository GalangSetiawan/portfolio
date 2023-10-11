
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from '@angular/router';

// import { authInterceptorProviders } from './_helpers/auth.interceptor.service';
// import { AuthGuard } from './_helpers/auth.guard';
// import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
