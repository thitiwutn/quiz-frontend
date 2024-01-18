import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../../api/services/account.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.scss']
})
export class ContinueComponent implements OnInit {

  userName: string = '';

  constructor(private readonly router: Router, private readonly accountService: AccountService) {

  }

  ngOnInit(): void {

  }


  clickGo() {
    if (!this.userName) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to input name',
      });
      return;
    }

    this.accountService.getApiAccountUser(this.userName).subscribe({
      next: (res) => {
        if (res.success) {
          this.setLocalStorageUser(res.data);
          this.router.navigate(['quiz']);
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
