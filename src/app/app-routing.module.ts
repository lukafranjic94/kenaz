import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ArticleContainerComponent } from './pages/article-container/article-container.component';
import { CategoryContainerComponent } from './pages/category-container/category-container.component';
import { HomeContainerComponent } from './pages/home-container/home-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeContainerComponent },
      { path: 'categories/:name', component: CategoryContainerComponent },
      { path: 'articles/:id', component: ArticleContainerComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
