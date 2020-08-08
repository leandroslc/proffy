/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { images, icons } from '../../assets';
import * as styles from './styles';

type PageHeaderProps = PropsWithChildren<{
  title: string;
}>;

export const PageHeader = (props: PageHeaderProps) => {
  const { title, children } = props;

  return (
    <header css={styles.header}>
      <div css={styles.topBar}>
        <Link css={styles.topBarLink} to="/">
          <img src={icons.back} alt="Voltar" />
        </Link>
        <img css={styles.topBarLogo} src={images.logo} alt="Proffy" />
      </div>

      <div css={styles.headerContent}>
        <strong css={styles.headerContentText}>{title}</strong>
        {children}
      </div>
    </header>
  );
};
