import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogContentComponent } from './blog/blog-content/blog-content.component';
import { SinglePostComponent } from './blog/single-post/single-post.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home/content', component: HomeComponent },
  { path: 'home/blog', component: BlogContentComponent },
  {path : 'home/blog/post/1', component: SinglePostComponent},
  {
    path: 'home/login', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
