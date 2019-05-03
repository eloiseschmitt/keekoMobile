import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native'

export default class Home extends React.Component {

  _toResultatsPage() {
    this.props.navigation.navigate('Swipe')
  }

  _toMentionsPage() {
    this.props.navigation.navigate('Mentions')
  }

  render() {
    return (
      <View style={ styles.mainContainer }>
        <View style={ styles.imageContainer }>
          <Image
            source={ require('../visuels/Recherches-logos-KEEKOO_4.png') }
            style={ styles.image }
          />
        </View>
        <View style={ styles.resumeContainer }>
          <Text style={ styles.resumeText }>Répondez à quelques questions par oui ou par non pour obtenir votre note de présence sur Internet. Vous pouvez faire glisser les questions à gauche ou à droite pour répondre.</Text>
        </View>
        <View style={ styles.footer }>
          <TouchableOpacity onPress={() => this._toResultatsPage()} style={styles.button}>
            <Text style={ styles.textButton }>Accéder au questionnaire</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.footerMentions }>
        <Button
          onPress={() => this._toMentionsPage()}
          title="Mentions légales"
          color="#46403d"
          accessibilityLabel="Accéder aux mentions légales"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#4fc1df'
  },
  resumeContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },
  resumeText: {
    width: 300,
    textAlign: 'center',
    margin: 10,
    fontSize: 18
  },
  footer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 270
  },
  footerMentions: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 100
  },
  button: {
    width: 310,
    height: 60,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  textButton: {
    color: '#f1f1f1',
    fontSize: 23,
    textAlign: 'center',
    letterSpacing: 1
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 80
  },
  image: {
    width: 350,
    height: 100
  },
})
