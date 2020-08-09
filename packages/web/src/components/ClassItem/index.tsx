/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ClassInfo } from '../../models';
import api from '../../services/api';
import { icons } from '../../assets';
import * as styles from './styles';

interface ClassItemProps {
  classInfo: ClassInfo;
}

function getNormalizedPhoneNumber(phone: string) {
  return phone.replace(/[^\d]/g, '');
}

export const ClassItem = (props: ClassItemProps) => {
  const {
    classInfo: { subject, cost, user },
  } = props;

  async function createNewConnection() {
    await api.connections.create(user.id);
  }

  return (
    <article css={styles.container}>
      <header css={styles.header}>
        <img css={styles.headerPhoto} src={user.avatar} alt={user.name} />
        <div css={styles.headerTitle}>
          <strong css={styles.headerName}>{user.name}</strong>
          <span css={styles.headerSubject}>{subject}</span>
        </div>
      </header>

      <p css={styles.description}>{user.bio}</p>

      <footer css={styles.footer}>
        <p>
          Preço/Hora
          <strong css={styles.footerValue}>R$ {cost}</strong>
        </p>
        <a
          href={`https://wa.me/${getNormalizedPhoneNumber(user.whatsapp)}`}
          target="blank"
          css={styles.button}
          type="button"
          onClick={createNewConnection}
        >
          <img css={styles.buttonIcon} src={icons.whatsapp} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};
