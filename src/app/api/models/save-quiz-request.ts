/* tslint:disable */
import { QuestionRequest } from './question-request';
export interface SaveQuizRequest {
  groupId?: number;
  questions?: Array<QuestionRequest>;
  quizId?: number;
  userId?: number;
}
