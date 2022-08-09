import { Text, View,  TextInput, TouchableOpacity } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles'

export default function Home() {
  function handleParticipantAdd() {
    console.log('Adicionou')
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

      <Participant />

    </View>
  )
}