/** @jsx jsx */
import { jsx } from 'theme-ui';
import { icons } from '../../assets';
import * as styles from './styles';

interface TeacherItemProps {
  name: string;
  description: string;
  photo?: string;
  subject: string;
  value: number;
}

export const TeacherItem = (props: TeacherItemProps) => {
  const { name, description, subject, photo, value } = props;

  return (
    <article css={styles.container}>
      <header css={styles.header}>
        <img css={styles.headerPhoto} src={photo} alt={name} />
        <div css={styles.headerTitle}>
          <strong css={styles.headerName}>{name}</strong>
          <span css={styles.headerSubject}>{subject}</span>
        </div>
      </header>

      <p css={styles.description}>{description}</p>

      <footer css={styles.footer}>
        <p>
          Preço/Hora
          <strong css={styles.footerValue}>{value}</strong>
        </p>
        <button css={styles.button} type="button">
          <img css={styles.buttonIcon} src={icons.whatsapp} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};
