/* tslint:disable */
import { QuestionModel } from './question-model';
export interface SaveQuizRequest {
  groupId?: number;
  questions?: Array<QuestionModel>;
  quizId?: number;
  userId?: number;
}
