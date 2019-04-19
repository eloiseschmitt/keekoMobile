import { getQuestionsWithId } from '../Connexion-api/keekooMobileApi'
// Fonction permettant de retourner un id de question en f° des réponses données:
export function getQuestion (indexActualQuestion, reponse) {
  let idNextQuestion = ""
  let descrNextQuestion = ""

  switch(indexActualQuestion) {
    case 0:
      if(reponse == 0) {
        idNextQuestion = 2;
      }
      else {
        idNextQuestion = 4;
      }
      break;

    default: idNextQuestion = 1
  }
  //return descrNextQuestion;
  return idNextQuestion;
}
