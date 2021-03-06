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
import { SidebarArticlesComponent } from './shared/sidebar/components/sidebar-articles/sidebar-articles.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarSocialComponent } from './shared/sidebar/components/sidebar-social/sidebar-social.component';
import { SidebarVideoComponent } from './shared/sidebar/components/sidebar-video/sidebar-video.component';
import { SidebarFacebookComponent } from './shared/sidebar/components/sidebar-facebook/sidebar-facebook.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ArticleListComponent } from './shared/footer/components/article-list/article-list.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoryContainerComponent } from './pages/category-container/category-container.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './shared/header/header.component';
import { ArticleContainerComponent } from './pages/article-container/article-container.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ArticleSliderComponent } from './components/article-slider/article-slider.component';
import { ImageSliderComponent } from './pages/home-container/components/image-slider/image-slider.component';
import { TweetsComponent } from './shared/footer/components/tweets/tweets.component';
import { ArticleCarouselComponent } from './pages/home-container/components/article-carousel/article-carousel.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalImageComponent } from './pages/home-container/components/modal-image/modal-image.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentFormComponent } from './pages/article-container/components/comment-form/comment-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeContainerComponent,
    CategoryArticlesComponent,
    SidebarArticlesComponent,
    SidebarSocialComponent,
    SidebarVideoComponent,
    SidebarFacebookComponent,
    FooterComponent,
    ArticleListComponent,
    SidebarComponent,
    CategoryContainerComponent,
    HeaderComponent,
    ArticleContainerComponent,
    ArticleSliderComponent,
    ImageSliderComponent,
    TweetsComponent,
    ArticleCarouselComponent,
    ModalImageComponent,
    CommentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    SlickCarouselModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
