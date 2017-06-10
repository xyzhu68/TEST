import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SigninComponent } from 'app/auth/signin/signin.component';
import { SignupComponent } from 'app/auth/signup/signup.component';

const authRoutes = [
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
];
@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule{}