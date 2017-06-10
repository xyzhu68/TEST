import { PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from 'app/core/home/home.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path:
    'recipes',
    loadChildren: './recipes/recipes.module#RecipesModule',
    canLoad: [AuthGuard]
  },
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
      ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
