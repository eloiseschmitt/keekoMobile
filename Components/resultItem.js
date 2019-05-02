import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { getQuestionsWithId } from '../Connexion-api/keekooMobileApi'

export default class ResultsItems extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: ""
    }
  }

  render() {
    const result = this.props.result
    getQuestionsWithId(result.item.id_question).then(data => {
        this.setState({
          question: data.results.question[0].detail
        })
      })
    let majorite
    let icone
    if(result.item.position == 0) {
      majorite = "La majorité des freelances a répondu comme vous"
      icone = require('../visuels/majority.png')
    } else {
      majorite = "La majorité des freelances n'a pas répondu comme vous"
      icone = require('../visuels/notmajority.png')
    }
    //console.log(result)
    return (
      <View style={ styles.mainContainer }>
        <View style={ styles.subContainer }>
          <Text style={ styles.detailQuestion }>{this.state.question}</Text>
        </View>
        <View style={ styles.subContainer }>
          <Text style={ styles.detailMajorite }>{majorite}</Text>
          <Image
            source={icone}
            style={{width: 50, height: 50}}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#235663',
    borderRadius: 10,
    height: 150,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20
  },
  subContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailQuestion: {
    textAlign: 'center',
    color: 'white'
  },
  detailMajorite: {
    textAlign: 'center',
    color: 'white'
  }
})
