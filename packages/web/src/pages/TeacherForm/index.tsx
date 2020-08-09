/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  PageHeader,
  Input,
  TextArea,
  Select,
} from '../../components';
import { Schedule } from '../../models';
import { icons } from '../../assets';
import data from '../../config/data';
import api from '../../services/api';
import * as styles from './styles';

interface ScheduleItem extends Schedule {
  key: number;
  weekDay: string;
  from: string;
  to: string;
}

export const TeacherForm = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [schedules, setSchedules] = useState([
    { key: 1, weekDay: '', from: '', to: '' } as ScheduleItem,
  ]);
  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.classes.create({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedules,
    });

    history.push('/');
  }

  function addSchedule() {
    setSchedules([
      ...schedules,
      {
        key: schedules.length + 1,
        weekDay: '',
        from: '',
        to: '',
      } as ScheduleItem,
    ]);
  }

  function setScheduleValue(position: number, field: string, value: string) {
    const newSchedules = schedules.map((schedule, index) => {
      return index === position ? { ...schedule, [field]: value } : schedule;
    });

    setSchedules(newSchedules);
  }

  return (
    <Container css={styles.page}>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário"
        contentStyle={styles.pageHeaderContent}
      />

      <main css={styles.main}>
        <form onSubmit={handleSubmit}>
          <fieldset css={styles.fieldset}>
            <legend css={styles.legend}>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              type="text"
              labelStyle={styles.inputLabel}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              name="avatar"
              label="Avatar"
              type="text"
              labelStyle={styles.inputLabel}
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />

            <Input
              name="whatsapp"
              label="Whatsapp"
              type="text"
              labelStyle={styles.inputLabel}
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />

            <TextArea
              name="bio"
              label="Biografia"
              labelStyle={styles.inputLabel}
              marginTop={2.4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <Input
              name="cost"
              label="Custo da sua hora por aula"
              type="text"
              labelStyle={styles.inputLabel}
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset css={styles.fieldset}>
            <legend css={styles.legend}>
              Horários disponíveis
              <button
                type="button"
                css={styles.legendButton}
                onClick={addSchedule}
              >
                + Novo horário
              </button>
            </legend>

            {schedules.map((schedule, index) => (
              <div key={schedule.key} css={styles.scheduleItem}>
                <Select
                  name="week-day"
                  label="Dia da semana"
                  labelStyle={styles.inputLabel}
                  value={schedule.weekDay}
                  onChange={(e) =>
                    setScheduleValue(index, 'weekDay', e.target.value)
                  }
                  options={data.weekDays}
                />

                <Input
                  name="from"
                  label="Das"
                  type="time"
                  labelStyle={styles.inputLabel}
                  value={schedule.from}
                  onChange={(e) =>
                    setScheduleValue(index, 'from', e.target.value)
                  }
                />

                <Input
                  name="to"
                  label="Até"
                  type="time"
                  labelStyle={styles.inputLabel}
                  value={schedule.to}
                  onChange={(e) =>
                    setScheduleValue(index, 'to', e.target.value)
                  }
                />
              </div>
            ))}
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
        </form>
      </main>
    </Container>
  );
};
