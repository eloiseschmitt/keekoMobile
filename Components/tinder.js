import React, { Component } from 'react'
import Swiper from '../react-native-deck-swiper'
import { Button, StyleSheet, Text, View } from 'react-native'
//import { getRecommandation } from '../Ressources/Recommandation'
import Recommandation from '../Ressources'

// demo purposes only
function * range (start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

export default class Swipe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: ['Vos clients sont des professionnels ?',
              'Vos clients sont des particuliers ?',
              'Etes vous présents sur facebook ou Instagram ?',
              'Êtes vous présents sur linkedin ?',
              'Avez-vous un site internet ?',
              'Avez-vous une fiche Google My Business ?',
              'Avez-vous un blog pour votre entreprise ?',
              'Le web vous a-t-il déjà apporté des clients ?',
              'Votre secteur d\'activité est-il très compétitif ?',
              'Vos concurrents sont-ils très présents sur le web'
            ],
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
      answers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      answersString: '',
      recommandationsKparK: []
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
    this.state.answers[index] = type
    this.forceUpdate()
    this.setState({
      cardIndex: this.state.cardIndex+1
    })
  //  console.log(`question n° ${index}`, `réponse n° ${type}`)
  }

  onSwipedAllCards = () => {
    var answersString = this.state.answers.join()
    /* var toto = getRecommandation(1,1,1,1,1,1,1,1,1,1)
    console.log(toto[0].titre)
    this.setState({
      swipedAllCards: true,
      answersString: answersString,
      recommandationsKparK: toto
    })
  /*  recommandationsKparK.forEach(function(element) {
      console.log(element.titre)
    })*/
    this.props.navigation.navigate('Results')
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
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
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
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
              title: 'BLEAH',
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
              title: 'SUPER LIKE',
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
          <Button onPress={() => this.swiper.swipeBack()} title='Revenir en arrière' />
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4fc1df'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
})
