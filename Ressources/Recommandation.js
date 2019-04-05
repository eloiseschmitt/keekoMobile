import Recommandations from './TotalRecommandations'
import { getRecommandationsWithIds } from '../Connexion-api/keekooMobileApi'
// Fonction permettant de retourner les recommandations en f° des réponses données:

export function getRecommandation (reponse1, reponse2, reponse3, reponse4, reponse5, reponse6, reponse7, reponse8, reponse9, reponse10) {
  var idList = []

  if(reponse1 == 0) {
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
  }

  return idList;

}
