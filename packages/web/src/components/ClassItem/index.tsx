/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ClassInfo } from '../../models';
import { icons } from '../../assets';
import * as styles from './styles';

interface ClassItemProps {
  classInfo: ClassInfo;
}

export const ClassItem = (props: ClassItemProps) => {
  const {
    classInfo: { subject, description, cost, user },
  } = props;

  return (
    <article css={styles.container}>
      <header css={styles.header}>
        <img css={styles.headerPhoto} src={user.avatar} alt={user.name} />
        <div css={styles.headerTitle}>
          <strong css={styles.headerName}>{user.name}</strong>
          <span css={styles.headerSubject}>{subject}</span>
        </div>
      </header>

      <p css={styles.description}>{description}</p>

      <footer css={styles.footer}>
        <p>
          Preço/Hora
          <strong css={styles.footerValue}>R$ {cost}</strong>
        </p>
        <button css={styles.button} type="button">
          <img css={styles.buttonIcon} src={icons.whatsapp} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};
