import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-360';

import {fonts, borders} from './styles';

const titleRow = fontSize => ({
    fontSize,
    'fontWeight': fonts.weight,
    'lineHeight': 5,
    'color': fonts.color,
    'textAlign': 'center'
  })
  , styles = StyleSheet.create({
    'view': {
      'width': 1000,
      'padding': 5,
      'alignItems': 'center'
    },
    'banner': titleRow(40),
    'row': titleRow(30)
  });

export default TitleScreen = () => (
  <View style={styles.view}>
    <Text style={styles.banner}>"Una furtiva lagrima" | L'elisir d'amore (1832)</Text>
    <Text style={styles.row}>Musica: Gaetano Donizetti</Text>
    <Text style={styles.row}>Libretto: Felice Romani</Text>
    <Text style={styles.row}></Text>
    <Text style={styles.row}>Orchestra e Coro del Maggio Musicale Fiorentino</Text>
    <Text style={styles.row}>Maestro concertatore e direttore: Fabrizio Maria Carminati</Text>
    <Text style={styles.row}>Regia: Pier Francesco Maestrini</Text>
    <Text style={styles.row}>Teatro del Maggio Musicale Fiorentino, 4 luglio 2019</Text>
  </View>
)
