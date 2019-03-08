import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'

export default class Results extends React.Component {

  _toRecommandationsPage() {
    this.props.navigation.navigate('Reco')
  }

  render() {

    return (
      <View style={ styles.mainContainer }>
        <Text style={ styles.titre }>votre résultat</Text>
        <View style={ styles.imageContainer }>
          <Image
            source={ require('../visuels/bar.png') }
            style={ styles.image }
          />
          <Text>80% Bravo!</Text>
        </View>
        <View style={ styles.footer }>
          <TouchableOpacity onPress={() => this._toRecommandationsPage()} style={styles.button}>
            <Text style={ styles.textButton }>accéder aux recommandations</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 120,
    backgroundColor: '#4fc1df'
  },
  titre: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: '#fff'
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  image: {
    width: 350,
    height: 100
  },
  footer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 200
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
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center'
  }
})
