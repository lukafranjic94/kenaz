import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { CategoryArticlesComponent } from './pages/home-container/components/category-articles/category-articles.component';
import { MatCardModule } from '@angular/material/card';
import { SidebarArticlesComponent } from './components/sidebar-articles/sidebar-articles.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarSocialComponent } from './components/sidebar-social/sidebar-social.component';
import { SidebarVideoComponent } from './components/sidebar-video/sidebar-video.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeContainerComponent,
    CategoryArticlesComponent,
    SidebarArticlesComponent,
    SidebarSocialComponent,
    SidebarVideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
