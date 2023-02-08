import React from 'react';
import { SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
});

const SectionListBasics = () => {
  return (
    <View style={styles.container} >
      <SectionList 
        sections={[
          {title: 'A', data: ['Árvore']},
          {title: 'B',  data: ['Bolo']},
          {title: 'C', data: ['Carro']},
          {title: 'D', data: ['Dado']},   
          {title: 'E', data: ['Escola']},
          {title: 'F', data: ['Festa']},
          {title: 'G', data: ['Galinha']},
          {title: 'H', data: ['Helicóptero']},
          {title: 'I', data: ['Índio']},
          {title: 'J', data: ['Jácare']},
          {title: 'K', data: ['Karaokê']},
          {title: 'L', data: ['Linha']},
          {title: 'M', data: ['Mãe']},
          {title: 'N', data: ['Nó']},
          {title: 'O', data: ['Ônibus']},
          {title: 'P', data: ['Paris']},
          {title: 'Q', data: ['Queijo']},
          {title: 'R', data: ['Razão']},
          {title: 'S', data: ['Sorvete']},
          {title: 'T', data: ['Tatu']},
          {title: 'U', data: ['Unha']},
          {title: 'V', data: ['Vários']},
          {title: 'W', data: ['Website']},
          {title: 'Y', data: ['Yakisoba']},
          {title: 'Z', data: ['Zoologico']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader ={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => 'basicListEntry-${item}'}
      />

    </View>
  );
};

export default SectionListBasics;