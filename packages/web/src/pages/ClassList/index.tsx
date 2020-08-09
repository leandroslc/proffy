/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, FormEvent } from 'react';
import {
  PageHeader,
  Container,
  ClassItem,
  Input,
  Select,
} from '../../components';
import { ClassInfo } from '../../models';
import api from '../../services/api';
import data from '../../config/data';
import { icons } from '../../assets';
import * as styles from './styles';

export const ClassList = () => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [classes, setClasses] = useState([] as ClassInfo[]);

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    const response = await api.classes.search({
      subject,
      weekDay,
      time,
    });

    setClasses(response.data);
  }

  return (
    <Container css={styles.page}>
      <PageHeader title="Estes são os proffys disponíveis.">
        <form css={styles.searchForm} onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            inline={true}
            labelStyle={styles.inputLabel}
            marginTop={0}
            options={data.subjects}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <Select
            name="week-day"
            label="Dia da semana"
            inline={true}
            labelStyle={styles.inputLabel}
            options={data.weekDays}
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
          />

          <Input
            name="time"
            label="Hora"
            type="time"
            inline={true}
            labelStyle={styles.inputLabel}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit" css={styles.searchButton} title="Pesquisar">
            <img src={icons.search} alt="Pesquisar" />
            <span css={styles.searchButtonText}>Buscar</span>
          </button>
        </form>
      </PageHeader>

      <main css={styles.classList}>
        {classes.map((classInfo) => (
          <ClassItem key={classInfo.id} classInfo={classInfo} />
        ))}
      </main>
    </Container>
  );
};
