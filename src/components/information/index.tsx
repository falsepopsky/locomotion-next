import Image from 'next/image';
import { StyledLink } from '../link';
import { BoxSection, HeaderMax, HeaderMin, Ol, Paragraph } from '../ui';

const Information = () => {
  return (
    <>
      <BoxSection img>
        <Image alt='Locomotion logo' src='/logo_white.png' layout='fill' objectFit='contain' />
      </BoxSection>
      <BoxSection>
        <HeaderMax>Un poco de historia</HeaderMax>

        <HeaderMin>¿Qué es Locomotion TV?</HeaderMin>
        <Paragraph>
          Locomotion TV es un proyecto creado por fans y para fans que ofrece un servicio de streaming tanto de
          peliculas, ovas, animes y series para adultos basado en el antiguo canal de cable <b>Locomotion</b>, de los
          cuales los principales responsables y sitios oficiales son&#58;
          <StyledLink href='https://www.facebook.com/locomotionxtv/'>Facebook</StyledLink>y
          <StyledLink href='http://locomotiontv.com/envivo'>Sitio Oficial</StyledLink>
        </Paragraph>

        <HeaderMin>¿Qué es Locomotion TV NEXT?</HeaderMin>
        <Paragraph>
          Locomotion TV NEXT, es un proyecto que lo pensé cuando el sitio oficial seguía y sigue sufriendo de constantes
          ataques DDoS el cuál imposibilita visitar la página, ver el streaming, etc., por lo cual decidi crear algo
          sencillo que se libere de estos problemas.
        </Paragraph>

        <HeaderMin>¿En que se diferencian ambas páginas?</HeaderMin>
        <Paragraph>Principalmente me enfoque en varios puntos</Paragraph>
        <Ol>
          <li>Diseño y que sea Responsive.</li>
          <li>Ofrecer la programación y horarios tanto del día corriente &#40;página principal&#41;, como semanal.</li>
          <li>
            Trabajar con NEXT JS, que es un framework que me brinda las herramientas necesarias para poder realizarlo de
            manera sencilla &#40;React, APIs, SSR, etc.&#41;.
          </li>
        </Ol>
      </BoxSection>
    </>
  );
};

export default Information;
