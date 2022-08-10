import { useState } from "react";
import { Text, View,  TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles'

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]) 
  const [name, setName] = useState('')
 
  function handleParticipantAdd(name: string) {
    if(participants.includes(name)) {
      return Alert.alert('Participante Existe', 'Já existe um participante na lista com esse nome!')
    }
    
    if(name.trim() === '') {
      return Alert.alert('Campo vazio', 'Digite o nome do participante!!!')
    }

    setParticipants(prevState => ([...prevState, name]))
    setName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover ${name}?`, [
      {
        text: 'Sim',
        onPress: () => removeParticipant(name)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  
  function removeParticipant(name: string) {
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
          onChangeText={setName}
          value={name}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd(name)}>
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