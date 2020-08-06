/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'react-router-dom';
import { Container } from '../../components';
import { images, icons } from '../../assets';
import * as styles from './styles';

export const Landing = () => {
  return (
    <div css={styles.page}>
      <Container css={styles.content}>
        <div css={styles.logoContainer}>
          <img css={styles.logoImg} src={images.logo} alt="Proffy" />
          <h2 css={styles.logoText}>Sua plataforma de estudos online.</h2>
        </div>

        <img
          css={styles.heroImg}
          src={images.hero}
          alt="Plataforma de estudos"
        />

        <div css={styles.buttons}>
          <Link
            css={(theme) => [styles.button(theme), styles.studyButton(theme)]}
            to="/study"
          >
            <img css={styles.buttonIcon} src={icons.study} alt="Estudar" />
            Estudar
          </Link>
          <Link
            css={(theme) => [
              styles.button(theme),
              styles.giveClassesButton(theme),
            ]}
            to="/give-classes"
          >
            <img
              css={styles.buttonIcon}
              src={icons.giveClasses}
              alt="Dar aulas"
            />
            Dar aulas
          </Link>
        </div>

        <span css={styles.totalConnections}>
          Total de 200 conexões já realizadas
          <img
            css={styles.totalConnectionsIcon}
            src={icons.purpleHeart}
            alt="Coração roxo"
          />
        </span>
      </Container>
    </div>
  );
};
