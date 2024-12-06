import { Routes } from '@angular/router';
import { LegoCatalogComponent } from './pages/lego-catalog/lego-catalog.component';
import { LegoFormComponent } from './pages/lego-form/lego-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "lego", component: LegoCatalogComponent },
    { path: "", redirectTo: "lego", pathMatch: "full" },
    { path: "form", component: LegoFormComponent, canActivate: [authGuard] },
    { path: "**", component: NotFoundComponent }, 
];
