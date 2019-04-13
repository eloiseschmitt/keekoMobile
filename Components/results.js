import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'

export default class Results extends React.Component {


  _toRecommandationsPage() {
    this.props.navigation.navigate('Reco', {recommandations: this.props.navigation.state.params.recommandations})
  }

  render() {
    /**
      Compter le nombre de recommandations et en fonction établir un %
    */
    const nbDeReco = this.props.navigation.state.params.recommandations.length
    var pourc = 'pas de résultat'
    var circles = require('../visuels/bar.png')
    if(nbDeReco == 1) {
      pourc = '80% Bravo!'
      circles = require('../visuels/circle80.png')
    } else if (nbDeReco > 1 && nbDeReco<= 3) {
      pourc = '60%, Encore quelques efforts'
      circles = require('../visuels/circle60.png')
    } else if (nbDeReco > 3 && nbDeReco<= 6) {
      pourc = '40%, Voyons ensemble comment progresser'
      circles = require('../visuels/circle40.png')
    } else if (nbDeReco > 6 && nbDeReco<= 10) {
      pourc = '20%, Votre marge de progression est élevée'
      circles = require('../visuels/circle20.png')
    }
    return (
      <View style={ styles.mainContainer }>
        <Text style={ styles.titre }>Vos résultats</Text>
        <View style={ styles.imageContainer }>
        <Text style={ styles.results }>{pourc}</Text>
          <Image
            source={ circles }
            style={ styles.image }
          />
        </View>
        <View style={ styles.footer }>
          <TouchableOpacity onPress={() => this._toRecommandationsPage()} style={styles.button}>
            <Text style={ styles.textButton }>Accéder aux recommandations</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff'
  },
  titre: {
    textAlign: 'center',
    fontSize: 20,
    textAlignVertical: 'center',
    color: '#545454'
  },
  results: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4fc1df'
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  image: {
    width: 200,
    height: 200
  },
  footer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 100
  },
  button: {
    width: 300,
    height: 90,
    backgroundColor: '#235663',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10
  },
  textButton: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center'
  }
})
