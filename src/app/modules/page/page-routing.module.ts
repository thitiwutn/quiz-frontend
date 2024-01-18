/** @format */

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {ContinueComponent} from "./continue/continue.component";
import {QuizComponent} from "./quiz/quiz.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'continue',
    component: ContinueComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  }
];

export const PageRoutingModule: ModuleWithProviders<any> = RouterModule.forChild(routes);
