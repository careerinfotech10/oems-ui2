import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { AdminComponent } from './layout/pages/admin/admin.component';
import { UserComponent } from './layout/pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
