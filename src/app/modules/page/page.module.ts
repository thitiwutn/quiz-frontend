import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ContinueComponent} from './continue/continue.component';
import {PageRoutingModule} from "./page-routing.module";
import {ButtonModule} from 'primeng/button';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import { QuizComponent } from './quiz/quiz.component';
import {TriStateCheckboxModule} from "primeng/tristatecheckbox";
import {CheckboxModule} from "primeng/checkbox";
import {RadioButtonModule} from "primeng/radiobutton";
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    ContinueComponent,
    QuizComponent,
    SummaryComponent,
  ],
  imports: [
    PageRoutingModule,
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    TriStateCheckboxModule,
    CheckboxModule,
    RadioButtonModule
  ]
})
export class PageModule {
}
