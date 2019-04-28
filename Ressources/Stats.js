
export function haveStats (totalIdQuestions, totalIdAnswers, listAnswers) {

let resultInternaute = [
  {
    cat: 'marché',
    majorite: 0,
  },
  {
    cat: 'présence en ligne',
    majorite: 0,
  },
  {
    cat: 'site Internet',
    majorite: 0,
  },
  {
    cat: 'réseaux sociaux',
    majorite: 0,
  },
]

let statsArray = [
  {
    id_question: 1,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 2,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 3,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 4,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 5,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 6,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 7,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 8,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 9,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 10,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 11,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 12,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 13,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  },
  {
    id_question: 14,
    nb_de_oui: 0,
    nb_de_non: 0,
    majorite_de: 1,
  }
];

let statsInternaute = []

  //Stats des réponses générales:
  for (let idQuestion in listAnswers.answers) {
    let nbDeOui = 0
    let nbDeNon = 0
    let plusDeOuiQueDeNon = [];

    for(let item in statsArray) {
      if(statsArray[item].id_question == listAnswers.answers[idQuestion].question_id) {
        if(listAnswers.answers[idQuestion].reponse == 0) {
          statsArray[item].nb_de_non = statsArray[item].nb_de_non + 1
        } else {
          statsArray[item].nb_de_oui = statsArray[item].nb_de_oui + 1
        }
        if(statsArray[item].nb_de_non > statsArray[item].nb_de_oui) {
          statsArray[item].majorite_de = 0
        }
      }
    }
  }

  //Stats Internaute par rapport aux stats générales:
  let nbDeQuestionsRepondues = totalIdQuestions.length

  for(let i=0 ; i<nbDeQuestionsRepondues ; i++) {

    let retour;
    let id = i+1

    for(detail in statsArray) {
      if(statsArray[detail].id_question == totalIdQuestions[i]) { //Comparaison avec la question des stats générales
        if(statsArray[detail].majorite_de == totalIdAnswers[i]) {// Si réponses == majorite_de alors vous etes dans la majorite
          retour = {
            id: id,
            id_question: totalIdQuestions[i],
            position: 1,
          }
        } else {
          retour = {
            id: id,
            id_question: totalIdQuestions[i],
            position: 0,
          }
        }
        statsInternaute.push(retour)
      }
    }


  }

  return statsInternaute
}
