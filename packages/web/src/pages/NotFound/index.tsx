/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'react-router-dom';
import * as styles from './styles';

export const NotFound = () => {
  return (
    <div css={styles.page}>
      <h1 css={styles.title}>Página não encontrada.</h1>
      <span css={styles.text}>
        <Link css={styles.link} to="/">
          Clique aqui
        </Link>{' '}
        para voltar ao início.
      </span>
    </div>
  );
};
