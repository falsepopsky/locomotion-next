import Image from 'next/image';
import { BoxSection } from './Legacy.styles';

const Legacy = () => {
  return (
    <>
      <BoxSection img>
        <Image
          alt="Locomotion logo"
          src="/logo_white.png"
          layout="fill"
          objectFit="contain"
        />
      </BoxSection>
      <BoxSection>
        <h3>¿Qué es Locomotion TV NEXT?</h3>
        <p>
          Locomotion TV NEXT, es un proyecto que lo pensé cuando el sitio
          oficial de unos chicos que ofrece un servicio de streaming del antiguo
          canal <b>Locomotion</b> de cable, seguía y sigue sufriendo de
          constantes ataques DDoS el cuál imposibilita visitar la página.
        </p>

        <h3>¿Qué es Locomotion TV?</h3>
        <p>
          Locomotion TV es un proyecto creado por fans y para fans que ofrece un
          servicio de streaming tanto de peliculas, ovas animes y series para
          adultos, de los cuales los principales responsables y sitios oficiales
          son: <a href="https://www.facebook.com/locomotionxtv/">Facebook</a> y{' '}
          <a href="http://locomotiontv.com/envivo">Sitio Oficial</a>
        </p>

        <h3>¿En que se diferencian ambas páginas?</h3>
        <p>Principalmente me enfoque en varios puntos</p>
        <ol>
          <li>Diseño</li>
          <li>Responsive</li>
          <li>
            Ofrecer la programación de los horarios tanto del día y semanal
          </li>
        </ol>
      </BoxSection>
    </>
  );
};

export default Legacy;
