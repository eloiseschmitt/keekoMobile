import { getQuestionsWithId } from '../Connexion-api/keekooMobileApi'
// Fonction permettant de retourner un id de question en f° des réponses données:
export function getQuestion (indexActualQuestion, reponse) {
  let idNextQuestion = parseInt(indexActualQuestion)+1
  let descrNextQuestion = ""

  switch(indexActualQuestion) {
    case 0:
      if(reponse == 0) {
        idNextQuestion = 1;
      }
      else {
        idNextQuestion = 6;
      }
      break;

    default: idNextQuestion = idNextQuestion
  }

  //return descrNextQuestion;
  return idNextQuestion;
}
