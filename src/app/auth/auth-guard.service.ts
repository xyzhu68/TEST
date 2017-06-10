import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    CanLoad,
    Route,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }

    public canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        var isAuthed = this.authService.isAuthenticated();
        if (!isAuthed) {
            this.router.navigate(['/']);
        }
        return isAuthed;
    }
}