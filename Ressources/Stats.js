
export function haveStats (totalIdQuestions, totalIdAnswers, listAnswers) {

let nombreDeQuestions = listAnswers.nbDeReponses

for(let i=1 ; i<=nombreDeQuestions : i++) {
  for(let j=1 ; j<=14 ; j++) {
    if(listAnswers.answers.question_id == j) {
      let ${question}+j = listAnswers.answers.id
      let ${nbDeOuiQuestion}+j
      let ${nbDeNonQuestion}+j
      let ${plusDeOuiQueDeNon}+j
      if(listAnswers.answers.reponse == 1) {
        ${nbDeOuiQuestion}+j = (${nbDeOuiQuestion}+j) + 1
      }
      else{
        ${nbDeNonQuestion}+j = (${nbDeNonQuestion}+j) + 1
      }
      if(${nbDeOuiQuestion}+j > ${nbDeNonQuestion}+j) {
        ${plusDeOuiQueDeNon}+j = 1
      }
    } else if(listAnswers.answers.question_id == 10) {
      let question10 = listAnswers.answers.id
      let nbDeOuiQuestion10
      let nbDeNonQuestion10
      let plusDeOuiQueDeNon10
      if(listAnswers.answers.reponse == 1) {
        nbDeOuiQuestion10++
      }
      else{
        nbDeNonQuestion10++
      }
      if(nbDeOuiQuestion10 > nbDeNonQuestion10) {
        plusDeOuiQueDeNon10 = 1
      }
    } else if(listAnswers.answers.question_id == 11) {
      let question11 = listAnswers.answers.id
      let nbDeOuiQuestion11
      let nbDeNonQuestion11
      let plusDeOuiQueDeNon11
      if(listAnswers.answers.reponse == 1) {
        nbDeOuiQuestion11++
      }
      else{
        nbDeNonQuestion11++
      }
      if(nbDeOuiQuestion11 > nbDeNonQuestion11) {
        plusDeOuiQueDeNon11 = 1
      }
    }
  }
}


  /*let stat = {
    secteur: "marché",
    score: "",
    trophe: "",
  },
  {
    secteur: "presence",
    score: "",
    trophe: "",
  },
  {
    secteur: "Internet",
    score: "",
    trophe: "",
  },
  {
    secteur: "rs",
    score: "",
    trophe: ""
  }

  return stats*/

  return "toto"
}
