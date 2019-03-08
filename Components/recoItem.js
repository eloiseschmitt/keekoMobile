import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class RecoItems extends React.Component {
  render() {
    const reco = this.props.reco
    return (
      <View style={ styles.mainContainer }>
        <View>
          <Text style={ styles.titre }>{reco.titre}</Text>
        </View>
        <View>
          <Text style={ styles.detail }>{reco.detail}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#235663',
    borderRadius: 10,
    height: 150,
    marginHorizontal: 20,
    marginVertical: 10
  },
  titre: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: '#fff'
  },
  detail: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white'
  }
})
