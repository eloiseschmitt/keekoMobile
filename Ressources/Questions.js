// Fonction permettant de retourner un id de question en f° des réponses données:
export function getQuestion (indexActualQuestion, reponse) {
  console.log(`index=${indexActualQuestion} et reponse=${reponse}`)
  let idNextQuestion = ""

  switch(indexActualQuestion) {
    case 1:
      if(reponse == 0) {
        idNextQuestion = 2;
      }
      else {
        idNextQuestion = 4;
      }
      break;

    case 2:
      if(reponse == 0) {
        idNextQuestion = 9;
      }
      else {
        idNextQuestion = 3;
      }
      break;

    case 3:
      idNextQuestion = 9;
      break;

    case 4:
      idNextQuestion = 2;
      break;

    case 5:
      if(reponse == 0) {
        idNextQuestion = 6;
      }
      else {
        idNextQuestion = 11;
      }
      break;

    case 6:
      idNextQuestion = 13;
      break;

    case 7:
      idNextQuestion = 12;
      break;

    case 8:
      idNextQuestion = 5;
      break;

    case 9:
      idNextQuestion = 10;
      break;

    case 10:
      idNextQuestion = 8;
      break;

    case 11:
      idNextQuestion = 7;
      break;
      
    case 13:
      idNextQuestion = 14;
      break;

    default: idNextQuestion = 15
  }
  return idNextQuestion;
}
