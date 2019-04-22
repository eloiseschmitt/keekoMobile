// Fonction permettant de retourner les id recommandations en f° des réponses données:
export function getRecommandation (arrayQuestions, arrayAnswers) {
  //console.log(`les questions=${arrayQuestions} et les réponses = ${arrayAnswers}`)
  let idList = []

  /*if(reponse1 == 0) {
    idList.push(1)
  }
  if(reponse2 == 0) {
    idList.push(2)
  }
  if(reponse3 == 0) {
    idList.push(3)
  }
  if(reponse4 == 0) {
    idList.push(4)
  }
  if(reponse5 == 0) {
    idList.push(5)
  }
  if(reponse1 == 1 && reponse2 == 1 && reponse3 == 1 && reponse4 == 1 && reponse5 == 1) {
    idList.push(6)
  }*/

  let listeIdToFind = [4, 3, 9, 10, 5, 11, 7, 12, 6, 13, 14]

  for(let i=0 ; i<= listeIdToFind.length ; i++) {
    function findIdQuestion(element) {
      return element == listeIdToFind[i]
    }
    let idQuestion = arrayQuestions.findIndex(findIdQuestion)
    let typeAnswer = arrayQuestions[idQuestion]

    switch(listeIdToFind[i]) {
      case 4:
        if(typeAnswer == 0) {
          idList.push(2)
        } else {
          idList.push(1)
        }
        break;

      case 3:
        if(typeAnswer == 0) {
          idList.push(4)
        } else {
          idList.push(3)
        }
        break;

      case 9:
        if(typeAnswer == 0) {
          idList.push(16)
        } else {
          idList.push(10)
        }
        break;

      case 10:
        if(typeAnswer == 0) {
          idList.push(18)
        } else {
          idList.push(17)
        }
        break;

      case 5:
        if(typeAnswer == 1) {
          idList.push(5)
        }
        else{
          idList.push(11)
        }
        break;

      case 11:
        if(typeAnswer == 0) {
          idList.push(6)
        }
        break;

      case 7:
        if(typeAnswer == 0) {
          idList.push(8)
        } else {
          idList.push(7)
        }
        break;

      case 12:
        if(typeAnswer == 0) {
          idList.push(10)
        }
        break;

      case 6:
        if(typeAnswer == 0) {
          idList.push(19)
        } else {
          idList.push(12)
        }
        break;

      case 13:
        if(typeAnswer == 0) {
          idList.push(13)
        }
        break;

      case 14:
        if(typeAnswer == 0) {
          idList.push(15)
        }
        else {
          idList.push(14)
        }
        break;

    }

  }


  return idList;

}
