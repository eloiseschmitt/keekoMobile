import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import RecoItem from '../Components/recoItem'

class Reco extends React.Component {

  constructor(props) {
    super(props)
    this.recommandations = [
      {
        id: 1,
        titre: "recommandation 1",
        detail: "commencez par réaliser ... Pour se faire, vous aurez besoin de ..."
      },
      {
        id: 2,
        titre: "recommandation 2",
        detail: "commencez par réaliser ... Pour se faire, vous aurez besoin de ..."
      },
      {
        id: 3,
        titre: "recommandation 3",
        detail: "commencez par réaliser ... Pour se faire, vous aurez besoin de ..."
      },
      {
        id: 4,
        titre: "recommandation 4",
        detail: "commencez par réaliser ... Pour se faire, vous aurez besoin de ..."
      },
    ]
  }

  render() {
    return (
      <View style={ styles.mainContainer }>
        <Text style={ styles.titre }>recommandations</Text>
        <FlatList
        data={this.recommandations}
        keyExtractor = {(item) => item.id.toString()}
        renderItem={({item}) => <RecoItem reco={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 120
  },
  titre: {
    flex: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: '#4fc1df'
  },
})

export default Reco
