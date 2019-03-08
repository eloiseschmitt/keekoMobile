import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class RecoItems extends React.Component {
  render() {
    const reco = this.props.reco
    return (
      <View style={ styles.mainContainer }>
        <View>
          <Text style={ styles.titre }>{reco.titre}</Text>
        </View>
          <View>
            <Text>{reco.detail}</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 10
  },
  titre: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: '#4fc1df'
  },
})

export default RecoItems
