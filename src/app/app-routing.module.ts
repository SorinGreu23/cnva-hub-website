import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';
import { SocialComponent } from './social/social.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'despre-noi', component: AboutComponent },
  { path: 'cursuri', component: CoursesComponent },
  { path: 'cursuri/web', component: WebComponent },
  { path: 'cursuri/social', component: SocialComponent },
  { path: 'cursuri/photo', component: PhotoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
