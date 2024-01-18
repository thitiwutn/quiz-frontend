import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {QuizService} from "../../../api/services/quiz.service";
import {environment} from "../../../../environments/environment";
import Swal from "sweetalert2";
import {QuizResultResponse} from "../../../api/models/quiz-result-response";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  groupName: string = '';
  userName: string = '';
  user: any;
  result: QuizResultResponse | undefined;

  constructor(private readonly router: Router, private readonly quizService: QuizService) {
  }

  ngOnInit(): void {
    history.pushState(null, '');
    const userEncode = localStorage.getItem(environment.localStorageKey.user);
    if (!userEncode) {
      this.router.navigate(['']);
      return;
    }
    this.groupName = localStorage.getItem('groupName')!;
    this.userName = localStorage.getItem('userName')!;
    this.user = JSON.parse(atob(userEncode));

    this.quizService.getApiQuizResult(this.user.userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.result = res.data;
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


  backToHome() {
    this.router.navigate(['']);
  }
}
