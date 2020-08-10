import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { ClassItem, PageHeader } from '../../components';
import { ClassInfo } from '../../models';
import api from '../../services/api';
import styles from './styles';

const ClassList = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [classes, setClasses] = useState([] as ClassInfo[]);
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleToggleFiltersVisibility() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleSearchSubmit() {
    const response = await api.classes.search({
      subject,
      weekDay,
      time,
    });

    setIsFiltersVisible(false);
    setClasses(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisibility}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matérias</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                  value={weekDay}
                  onChangeText={(text) => setWeekDay(text)}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </View>
            </View>

            <RectButton
              onPress={handleSearchSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.classList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {classes.map((classInfo) => (
          <ClassItem key={classInfo.id} classInfo={classInfo} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ClassList;
