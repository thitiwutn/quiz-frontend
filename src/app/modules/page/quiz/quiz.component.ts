import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {QuizService} from "../../../api/services/quiz.service";
import {environment} from "../../../../environments/environment";
import Swal from "sweetalert2";
import {QuizResponse} from "../../../api/models/quiz-response";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizData: QuizResponse | undefined;
  groupName: string = '';
  constructor(private readonly router: Router,
              private readonly quizService: QuizService) {
  }

  ngOnInit(): void {
    const userEncode = localStorage.getItem(environment.localStorageKey.user);
    if (!userEncode) {
      this.router.navigate(['']);
      return;
    }
    this.groupName = localStorage.getItem('groupName')!;

    const userId = JSON.parse(atob(userEncode)).userId;
    console.log(userId);
    this.quizService.getApiQuiz(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.quizData = res.data;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.errorMessage,
          });
        }
      }
    })
  }

  saveQuiz() {

  }

  submitQuiz() {

  }
}
