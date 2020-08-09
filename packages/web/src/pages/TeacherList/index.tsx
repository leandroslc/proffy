/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  PageHeader,
  Container,
  TeacherItem,
  Input,
  Select,
} from '../../components';
import data from '../../config/data';
import * as styles from './styles';

export const TeacherList = () => {
  return (
    <Container css={styles.page}>
      <PageHeader title="Estes são os proffys disponíveis.">
        <form css={styles.searchForm}>
          <Select
            name="subject"
            label="Matéria"
            inline={true}
            labelStyle={styles.inputLabel}
            marginTop={0}
            options={data.subjects}
          />

          <Select
            name="week-day"
            label="Dia da semana"
            inline={true}
            labelStyle={styles.inputLabel}
            options={data.weekDays}
          />

          <Input
            name="time"
            label="Hora"
            type="time"
            inline={true}
            labelStyle={styles.inputLabel}
          />
        </form>
      </PageHeader>

      <main css={styles.teacherList}>
        <TeacherItem
          name="Nome professor"
          description="Descrição do professor"
          subject="Nome matéria"
          value={80.0}
        />

        <TeacherItem
          name="Nome professor"
          description="Descrição do professor"
          subject="Nome matéria"
          value={80.0}
        />
      </main>
    </Container>
  );
};
