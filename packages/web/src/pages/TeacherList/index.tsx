/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PageHeader, Container, TeacherItem, Input } from '../../components';
import * as styles from './styles';

export const TeacherList = () => {
  return (
    <Container css={styles.page}>
      <PageHeader title="Estes são os proffys disponíveis.">
        <form css={styles.searchForm}>
          <Input
            name="subject"
            label="Matéria"
            type="text"
            inline={true}
            labelStyle={styles.inputLabel}
          />

          <Input
            name="week-day"
            label="Dia da semana"
            type="text"
            inline={true}
            labelStyle={styles.inputLabel}
          />

          <Input
            name="time"
            label="Hora"
            type="text"
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
