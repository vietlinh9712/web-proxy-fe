import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import {FuseValidators} from '@fuse/validators';
import {map} from 'rxjs';

@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignUpComponent implements OnInit
{
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signUpForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.signUpForm = this._formBuilder.group({
                email     : ['', [Validators.required, Validators.email]],
                password  : ['', [Validators.required, Validators.minLength(6)]],
                confirmPassword : ['', Validators.required],
                agreements: [true, Validators.requiredTrue]
            }, {
            validators: FuseValidators.mustMatch('password', 'confirmPassword')
          }
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign up
     */
    signUp(): void
    {
        // Do nothing if the form is invalid
        if ( this.signUpForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signUpForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign up
        this._authService.register({
          username: this.signUpForm.value.email,
          email: this.signUpForm.value.email,
          password: this.signUpForm.value.password
        }).pipe(
          map((res: any) => {
            if(res.error_info?.error_code) {
              throw res;
            }
            return res;
          })
        )
            .subscribe(
                (response) => {

                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/sign-in');
                },
                (response) => {

                    // Re-enable the form
                    this.signUpForm.enable();

                    // Reset the form
                    this.signUpNgForm.reset();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!'
                    };

                    // Show the alert
                    this.showAlert = true;
                }
            );
    }
}
