/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Interpolation } from '@emotion/core';
import { images, icons } from '../../assets';
import * as styles from './styles';

type PageHeaderProps = PropsWithChildren<{
  title: string;
  description?: string;
  contentStyle?: Interpolation;
}>;

export const PageHeader = (props: PageHeaderProps) => {
  const { title, description, contentStyle, children } = props;

  return (
    <header css={styles.header}>
      <div css={styles.topBar}>
        <Link css={styles.topBarLink} to="/">
          <img src={icons.back} alt="Voltar" />
        </Link>
        <img css={styles.topBarLogo} src={images.logo} alt="Proffy" />
      </div>

      <div css={[styles.headerContent, contentStyle || {}]}>
        <strong css={styles.headerContentTitle}>{title}</strong>
        {description && (
          <p css={styles.headerContentDescription}>{description}</p>
        )}
        {children}
      </div>
    </header>
  );
};
