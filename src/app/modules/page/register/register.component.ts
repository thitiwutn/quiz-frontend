import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GroupService} from "../../../api/services/group.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import {GroupModel} from "../../../api/models/group-model";
import {AccountService} from "../../../api/services/account.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = new FormGroup({
    groupId: new FormControl(null, Validators.required),
    name: new FormControl('', Validators.required),
  });
  groups: GroupModel[] = [];

  constructor(private readonly groupService: GroupService,
              private readonly accountService: AccountService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.groupService.getApiGroup().subscribe({
      next: (res) => {
        this.groups = res.data || [];
      }
    });
  }

  clickGo() {
    for (const key of Object.keys(this.form.value)) {
      if (this.form.get(key).hasError('required')) {
        switch (key) {
          case 'groupId':
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please select user group',
            });
            return;
          case 'name':
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You have to input name',
            });
            return;
        }
      }
    }

    this.accountService.postApiAccountUser(this.form.value).subscribe({
      next: (res) => {
        if (res.success) {
          this.setLocalStorageUser(res.data);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Register success',
            timer: 2000,
            showConfirmButton: false,
          });
          this.router.navigateByUrl('/quiz');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.errorMessage,
          });
        }
      }
    });
  }

  setLocalStorageUser(data: any) {
    const user = {
      userId: data.id,
      groupId: data.groupId,
    }
    localStorage.setItem('userName', data.name);
    localStorage.setItem('groupName', data.groupName);
    localStorage.setItem(environment.localStorageKey.user, btoa(JSON.stringify(user)));
  }
}
