import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
    selector: 'mt-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder,
        private loginService: LoginService) {}

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required]
        });
    }

    login(): void {

        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;

        this.loginService.login(email, password)
            .subscribe(user => console.log(user));
    }
}
