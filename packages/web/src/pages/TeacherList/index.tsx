/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PageHeader, Container, TeacherItem } from '../../components';
import * as styles from './styles';

export const TeacherList = () => {
  return (
    <Container css={styles.page}>
      <PageHeader title="Estes são os proffys disponíveis.">
        <form css={styles.searchForm}>
          <div css={styles.inputBlock}>
            <label css={styles.inputBlockLabel} htmlFor="subject">
              Matéria
            </label>
            <input css={styles.inputBlockInput} type="text" id="subject" />
          </div>

          <div css={styles.inputBlock}>
            <label css={styles.inputBlockLabel} htmlFor="week-day">
              Dia da semana
            </label>
            <input css={styles.inputBlockInput} type="text" id="week-day" />
          </div>

          <div css={styles.inputBlock}>
            <label css={styles.inputBlockLabel} htmlFor="time">
              Hora
            </label>
            <input css={styles.inputBlockInput} type="text" id="time" />
          </div>
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
