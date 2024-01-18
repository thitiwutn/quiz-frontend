/* tslint:disable */
import { QuestionModel } from './question-model';
export interface QuizResponse {
  isComplete?: boolean;
  questions?: Array<QuestionModel>;
  quizId?: number;
}
