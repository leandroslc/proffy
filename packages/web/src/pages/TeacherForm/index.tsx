/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  Container,
  PageHeader,
  Input,
  TextArea,
  Select,
} from '../../components';
import { icons } from '../../assets';
import data from '../../config/data';
import * as styles from './styles';

export const TeacherForm = () => {
  return (
    <Container css={styles.page}>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário"
        contentStyle={styles.pageHeaderContent}
      />

      <main css={styles.main}>
        <fieldset css={styles.fieldset}>
          <legend css={styles.legend}>Seus dados</legend>

          <Input
            name="name"
            label="Nome completo"
            type="text"
            labelStyle={styles.inputLabel}
          />

          <Input
            name="avatar"
            label="Avatar"
            type="text"
            labelStyle={styles.inputLabel}
          />

          <Input
            name="whatsapp"
            label="Whatsapp"
            type="text"
            labelStyle={styles.inputLabel}
          />

          <TextArea
            name="bio"
            label="Biografia"
            labelStyle={styles.inputLabel}
            marginTop={2.4}
          />
        </fieldset>

        <fieldset css={styles.fieldset}>
          <legend css={styles.legend}>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            labelStyle={styles.inputLabel}
            marginTop={2.4}
            options={data.subjects}
          />

          <Input
            name="cost"
            label="Custo da sua hora por aula"
            type="text"
            labelStyle={styles.inputLabel}
          />
        </fieldset>

        <fieldset css={styles.fieldset}>
          <legend css={styles.legend}>
            Horários disponíveis
            <button type="button" css={styles.legendButton}>
              + Novo horário
            </button>
          </legend>

          <div css={styles.scheduleItem}>
            <Select
              name="week-day"
              label="Dia da semana"
              labelStyle={styles.inputLabel}
              options={data.weekDays}
            />

            <Input
              name="from"
              label="Das"
              type="time"
              labelStyle={styles.inputLabel}
            />

            <Input
              name="to"
              label="Até"
              type="time"
              labelStyle={styles.inputLabel}
            />
          </div>
        </fieldset>

        <footer css={styles.footer}>
          <p css={styles.footerText}>
            <img
              css={styles.footerIcon}
              src={icons.warning}
              alt="Aviso importante"
            />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="submit" css={styles.button}>
            Salvar cadastro
          </button>
        </footer>
      </main>
    </Container>
  );
};
