import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { LoginService } from './login.service';
import { NotificationService } from './../../shared/messages/notification.service';

import { User } from './user.model';

@Component({
    selector: 'mt-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder,
        private loginService: LoginService,
        private notificationService: NotificationService) {}

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required]
        });
    }

    login(): void {

        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;

        this.loginService.login(email, password).subscribe((user: User) => {
            this.notificationService.notify(`Bem vindo, ${user.name}`)

        }, (loginError: HttpErrorResponse) => {
            this.notificationService.notify(`${loginError.error.message}`)
        });
    }
}
