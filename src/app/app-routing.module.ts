import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './education/neweducacion.component';
import { EditeducacionComponent } from './education/editeducacion.component';
import { NewSkillComponent } from './skills/new-skill.component';
import { EditSkillComponent } from './skills/edit-skill.component';
import { EditAboutComponent } from './about/edit-about.component';
import { EditMainComponent } from './main/edit-main.component';
import { NewprojectsComponent } from './projects/newprojects.component';
import { EditprojectsComponent } from './projects/editprojects.component';
import { ListContactComponent } from './contact/list-contact.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'nuevaExp', component: NewExperienciaComponent},
    {path:'update/:id', component: EditExperienciaComponent},
    {path: 'nuevaedu', component: NeweducacionComponent},
    {path: 'editEdu/:id', component: EditeducacionComponent},
    {path: 'newskill', component: NewSkillComponent },
    {path: 'editskill/:id', component: EditSkillComponent},
    {path: 'editAbout/:id', component: EditAboutComponent},
    {path: 'editMain/:id', component: EditMainComponent},
    {path: 'nuevoproyect', component: NewprojectsComponent},
    {path: 'editProyects/:id', component: EditprojectsComponent},
    {path: 'listContacts', component: ListContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}