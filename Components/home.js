import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class Home extends React.Component {

  _toResultatsPage() {
    this.props.navigation.navigate('Swipe')
  }

  render() {
    return (
      <View style={ styles.mainContainer }>
        <View style={ styles.imageContainer }>
          <Image
            source={ require('../visuels/keekoo.png') }
            style={ styles.image }
          />
        </View>
        <View style={ styles.resumeContainer }>
          <Text style={ styles.resumeText }>Qui cum venisset ob haec festinatis itineribus Antiochiam, praestrictis palatii ianuis, contempto Caesare, quem videri decuerat, ad praetorium cum pompa sollemni perrexit morbosque diu causatus nec regiam introiit nec processit in publicum</Text>
        </View>
        <View style={ styles.footer }>
          <TouchableOpacity onPress={() => this._toResultatsPage()} style={styles.button}>
            <Text style={ styles.textButton }>accéder au questionnaire</Text>
          </TouchableOpacity>
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
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
  },
  resumeText: {
    width: 300,
    textAlign: 'center',
    margin: 20
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
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  image: {
    width: 350,
    height: 100
  },
})
