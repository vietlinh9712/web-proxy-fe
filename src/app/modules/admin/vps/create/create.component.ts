import {ChangeDetectorRef, Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdminService} from "../../../../core/admin/admin.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @ViewChild('labelInput') labelInput: ElementRef<HTMLInputElement>;
  createForm: FormGroup;
  loading: boolean = false;

  // Private

  /**
   * Constructor
   */
  constructor(
    public matDialogRef: MatDialogRef<CreateComponent>,
    private _changeDetectorRef: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    private adminService: AdminService,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.initForm();
    this.createForm.patchValue(this.data.item);
  }

  initForm() {
    this.createForm = this._formBuilder.group({
      ip: ["", Validators.required],
      port: 0,
      username: ["", Validators.required],
      password: ["", Validators.required],
      country: ["", Validators.required],
      key: ["", Validators.required],
      url: 0,
      ipv6_gateway: ["", Validators.required],
      network_interface: ["", Validators.required]
    });
  }

  create(): void {
    this.loading = true;
    if(this.data.item) {
      this.adminService.updateVps(this.data.item.vps_id, {...this.data.item, ...this.createForm.value}).subscribe(() => {
        this.matDialogRef.close();
      });
    } else {
      this.adminService.createVps(this.createForm.value).subscribe(() => {
        this.matDialogRef.close();
      });
    }
  }
}

