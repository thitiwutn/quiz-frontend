import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {QuizService} from "../../../api/services/quiz.service";
import {environment} from "../../../../environments/environment";
import Swal from "sweetalert2";
import {QuizResponse} from "../../../api/models/quiz-response";
import {SaveQuizRequest} from "../../../api/models/save-quiz-request";
import {QuestionRequest} from "../../../api/models/question-request";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizData: QuizResponse | undefined;
  groupName: string = '';
  user: any = {};

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

    this.user = JSON.parse(atob(userEncode));
    this.quizService.getApiQuiz(this.user.userId).subscribe({
      next: (res) => {
        if (res.success) {
          if (res.data?.isComplete) {
            this.router.navigate(['summary']);
            return;
          }
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

  bodyForSave() {
    return {
      userId: this.user?.userId,
      quizId: this.quizData?.quizId,
      groupId: this.user?.groupId,
      questions: this.quizData?.questions?.filter(f => f.selectedChoiceId)
        .map((question) => {
          return {
            questionId: question.questionId,
            selectedChoiceId: question.selectedChoiceId,
          } as QuestionRequest;
        })
    } as SaveQuizRequest;
  }

  saveQuiz() {
    // check complete some questions
    if (!this.quizData?.questions?.some(e => e.selectedChoiceId)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to complete some questions.',
      });
      return;
    }
    const body = this.bodyForSave();
    this.quizService.postApiQuizSave(body).subscribe({
      next: (res) => {
        if (res.success) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Save quiz successfully',
          }).then(() => {
            this.router.navigate(['']);
          });
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

  submitQuiz() {
    // check complete all questions
    if (!this.quizData?.questions?.every(e => e.selectedChoiceId)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to complete the questions.',
      });
      return;
    }
    const body = this.bodyForSave();
    this.quizService.postApiQuizSubmit(body).subscribe({
      next: (res) => {
        if (res.success) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Save quiz successfully',
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            this.router.navigate(['summary']);
          });
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
}
