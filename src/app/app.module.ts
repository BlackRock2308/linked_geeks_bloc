import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { GaleryComponent } from './components/galery/galery.component';
import { BlogContentComponent } from './blog/blog-content/blog-content.component';
import { LatestPostComponent } from './components/latest-post/latest-post.component';
import { WhyBlogComponent } from './components/why-blog/why-blog.component';
import { SinglePostComponent } from './blog/single-post/single-post.component';
import { AsideComponent } from './blog/aside/aside.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateSomethingComponent } from './components/create-something/create-something.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    GaleryComponent,
    BlogContentComponent,
    LatestPostComponent,
    WhyBlogComponent,
    SinglePostComponent,
    AsideComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    ContactComponent,
    CreateSomethingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
