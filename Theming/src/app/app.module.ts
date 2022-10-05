import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModuleModule } from './app-material-module/app-material-module.module';
import { HeaderComponent } from './header-component/header-component.component';
import { MenuComponent } from './menu/menu.component';

import { HttpClientModule } from '@angular/common/http';

import { ThemeService } from './theme-service.service';
import { StyleManagerService } from './style-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModuleModule,
    HttpClientModule
  ],
  providers: [ThemeService, StyleManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
