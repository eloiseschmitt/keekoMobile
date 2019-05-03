import React from 'react'
import { View, ScrollView, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { haveStats } from '../Ressources/Stats'
import ResultItem from '../Components/resultItem'


export default class Results extends React.Component {

  _toRecommandationsPage() {
    this.props.navigation.navigate('Reco', {recommandations: this.props.navigation.state.params.recommandations})
  }

  render() {
    let listDesStats = haveStats(this.props.navigation.state.params.questionsId, this.props.navigation.state.params.answersId, this.props.navigation.state.params.listAnswers)

    return (
      <ScrollView style={ styles.mainContainer }>
        <Text style={ styles.titre }>Vos résultats</Text>
        <View style={ styles.sousTitre }>
          <Text style={{width: '50%', textAlign: 'center'}}>Questions auxquelles vous avez répondu</Text>
          <Text style={{width: '50%', textAlign: 'center'}}>La majorité des freelances :</Text>
        </View>

        <View>
          <FlatList
            data = {listDesStats}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = { (item) => <ResultItem result={item} />}
          />
        </View>
        <View style={ styles.footer }>
          <TouchableOpacity onPress={() => this._toRecommandationsPage()} style={styles.button}>
            <Text style={ styles.textButton }>Accéder aux recommandations</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  sousTitre: {
    flex: 1,
    flexDirection: 'row',
    padding: 20
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
    paddingBottom: 100
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
