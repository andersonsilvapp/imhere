import { useState } from "react";
import { Text, View,  TextInput, TouchableOpacity, FlatList } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles'

const DATA = ['Mariana', 'Juliana','Anderson', 'Rita', 'Eduardo', 'Andressa', 'Josefina', 'Dudu', 'Arlete']

export default function Home() {
  const [participants, setParticipants] = useState(DATA) 
 
  function handleParticipantAdd() {
    console.log('Adicionou')
  }

  function handleParticipantRemove(name: string) {
    setParticipants((prevState) => (
      prevState.filter((participant) => participant !== name)
    ))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sábado, 24 de novembro
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
        <FlatList 
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participant 
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)} 
            />            
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
            </Text>
          )}
        />
    </View>
  )
}