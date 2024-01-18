/* tslint:disable */
import { QuestionModel } from './question-model';
export interface QuizResponse {
  questions?: Array<QuestionModel>;
  quizId?: number;
}
