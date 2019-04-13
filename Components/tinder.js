import React, { Component } from 'react'
import Swiper from '../react-native-deck-swiper'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { getRecommandation } from '../Ressources/Recommandation'
import { getQuestion } from '../Ressources/Questions'
import { getRecommandationsWithIds } from '../Connexion-api/keekooMobileApi'
import { getQuestionsWithId } from '../Connexion-api/keekooMobileApi'

export default class Swipe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: ['Vos clients sont des professionnels ?','','','','','','','','',''],
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
      answers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card}</Text>
      </View>
    )
  };

  onSwiped = (type, index) => { //type: 0 = non, 1 = oui
    //console.log(`index = ${index}`)
    let nextQuestionDetails = getQuestion(index, type)
    //console.log(nextQuestionDetails)
    let idQuestion = parseInt(index)+1
    this.state.answers[index] = type

    getQuestionsWithId(nextQuestionDetails).then(data => {
        this.state.cards[idQuestion] = data.results.question[0].detail
        this.forceUpdate()
    });

    if(this.state.cardIndex == 9) {
      this.onSwipedAllCards()
    } else {
      this.setState({
        cardIndex: this.state.cardIndex+1
      })
    }

    //console.log(`question n° ${index}`, `réponse n° ${type}`)
  }

  onSwipedAllCards = () => {
    let arrayListeDesRecommandations = getRecommandation(this.state.answers[0],this.state.answers[1],this.state.answers[2],this.state.answers[3],this.state.answers[4],this.state.answers[5],this.state.answers[6],this.state.answers[7],this.state.answers[8],this.state.answers[9])
    let strListeDesRecommandations = arrayListeDesRecommandations.toString();
    this.setState({
      swipedAllCards: true
    })
    getRecommandationsWithIds(strListeDesRecommandations).then(data => {
      this.props.navigation.navigate('Results', {recommandations: data.results.reco})

    })

    //this.props.navigation.navigate('Results', {recommandations: listeDesRecommandations})
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  swipeRight = () => {
    this.swiper.swipeRight()
  };

  render () {
    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped(0, this.state.cardIndex)}
          onSwipedRight={() => this.onSwiped(1, this.state.cardIndex)}
          onSwipedTop={() => this.onSwiped(1, this.state.cardIndex)}
          onSwipedBottom={() => this.onSwiped(0, this.state.cardIndex)}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: 'NON',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },
            left: {
              title: 'NON',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'OUI',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: 'OUI',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
          <Button onPress={() => this.swiper.swipeBack()} title='Question précédente' />
        </Swiper>
        <View style={ styles.buttonsFooter }>
          <TouchableOpacity onPress={() => {this.swipeLeft(); this.onSwiped(0, this.state.cardIndex)}}>
            <Text style={ styles.textButtonNon }>NON</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.swipeRight(); this.onSwiped(1, this.state.cardIndex)}}>
            <Text style={ styles.textButtonOui }>OUI</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4fc1df'
  },
  buttonsFooter: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30
  },
  card: {
    //flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    padding: 20,
    height: 600,
    color: '#46403d'
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    backgroundColor: 'transparent'
  },
  textButtonNon: {
    width: 150,
    height: 60,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    fontSize: 30,
    color: "white",
    textAlign: 'center',
    lineHeight: 60
  },
  textButtonOui: {
    width: 150,
    height: 60,
    backgroundColor: '#46403d',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 30,
    color: "white",
    textAlign: 'center',
    lineHeight: 60
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
})
