import React, { Component } from 'react'
import Recommandations from './TotalRecommandations'
import { Text, FlatList,  } from 'react-native'
// Fonction permettant de retourner les recommandations en f° des réponses données:

export function getRecommandation (reponse1, reponse2, reponse3, reponse4, reponse5, reponse6, reponse7, reponse8, reponse9, reponse10) {
  var totalRecommandations = Recommandations
  var listeDesRecommandations = []

  if(reponse1 == 0) {
    listeDesRecommandations.push(totalRecommandations[0])
  }
  if(reponse2 == 0) {
    listeDesRecommandations.push(totalRecommandations[1])
  }
  if(reponse3 == 0) {
    listeDesRecommandations.push(totalRecommandations[2])
  }
  if(reponse4 == 0) {
    listeDesRecommandations.push(totalRecommandations[3])
  }
  if(reponse5 == 0) {
    listeDesRecommandations.push(totalRecommandations[4])
  }
  if(reponse1 == 1 && reponse2 == 1 && reponse3 == 1 && reponse4 == 1 && reponse5 == 1) {
    listeDesRecommandations.push(totalRecommandations[5])
  }

  return listeDesRecommandations;
}

/*export default const Recommandation = ({Recommandations}) => (

)*/
