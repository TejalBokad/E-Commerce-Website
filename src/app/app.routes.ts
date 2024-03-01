import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {'path':'home',component:HomeComponent},
    {'path':'about',component:AboutComponent},
    {'path':'products',component:ProductsComponent},
    {'path':'contact',component:ContactComponent},
    {'path':'login',component:LoginComponent},
    {'path':'register',component:RegisterComponent},
    {'path':'',redirectTo: '/home', pathMatch:'full'},
    {'path':'**',component:PageNotFoundComponent}
];
