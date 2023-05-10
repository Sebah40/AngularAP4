import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'nuevaExp', component: NewExperienciaComponent},
    {path:'update/:id', component: EditExperienciaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}