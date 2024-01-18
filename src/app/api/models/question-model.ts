/* tslint:disable */
import { ChoiceModel } from './choice-model';
export interface QuestionModel {
  choices?: Array<ChoiceModel>;
  questionId?: number;
  questionText?: string;
  selectedChoiceId?: number;
}
