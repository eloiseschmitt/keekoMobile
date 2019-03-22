import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import RecoItem from '../Components/recoItem'

export default class Reco extends React.Component {

  render() {
    return (
      <View style={ styles.mainContainer }>
        <Text style={ styles.titre }>recommandations</Text>
        <View>
          <FlatList
          data={this.props.navigation.state.params.recommandations}
          keyExtractor = {(item) => item.id.toString()}
          renderItem={({item}) => <RecoItem reco={item} />}
          />
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
})
