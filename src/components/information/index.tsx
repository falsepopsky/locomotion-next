import Image from 'next/image';
import { StyledH2, StyledP } from '../ui';
import { BoxSection, StyledH3 } from './styles';

const Information = () => {
  return (
    <>
      <BoxSection img>
        <Image alt='Locomotion logo' src='/logo_white.png' layout='fill' objectFit='contain' />
      </BoxSection>
      <BoxSection>
        <StyledH2>Un poco de historia</StyledH2>

        <StyledH3>¿Qué es Locomotion TV?</StyledH3>
        <StyledP>
          Locomotion TV es un proyecto creado por fans y para fans que ofrece un servicio de streaming tanto de
          peliculas, ovas, animes y series para adultos del antiguo canal de cable <b>Locomotion</b>, de los cuales los
          principales responsables y sitios oficiales son:{' '}
          <a href='https://www.facebook.com/locomotionxtv/'>Facebook</a> y{' '}
          <a href='http://locomotiontv.com/envivo'>Sitio Oficial</a>
        </StyledP>

        <StyledH3>¿Qué es Locomotion TV NEXT?</StyledH3>
        <StyledP>
          Locomotion TV NEXT, es un proyecto que lo pensé cuando el sitio oficial seguía y sigue sufriendo de constantes
          ataques DDoS el cuál imposibilita visitar la página y ver el stream o directamente, no podías saber que
          programa venía a continuación.
        </StyledP>

        <StyledH3>¿En que se diferencian ambas páginas?</StyledH3>
        <StyledP>Principalmente me enfoque en varios puntos</StyledP>
        <ol>
          <li>Diseño y que sea Responsive.</li>
          <li>Ofrecer la programación y horarios tanto del día corriente &#40;página principal&#41;, como semanal.</li>
          <li>
            Trabajar con NEXT JS, que es un framework que lo aprendí y tomé demasiado aprecio por las cosas que ofrece.
          </li>
        </ol>
      </BoxSection>
      <BoxSection>
        <StyledH2>F.A.Q.</StyledH2>

        <StyledH3>
          ¿Te contactaste con los dueños de la página para ver si podian mejorar la página o trabajar con ellos?
        </StyledH3>
        <StyledP>
          Sí, les mandé mensaje privado 2 veces por FB, en el cual me ofrecí tanto para cambiar su diseño o hacerlo
          juntos, pero no hubo más respuesta que solo de &quot;lo pasamos y vemos que nos dicen&quot;.
        </StyledP>

        <StyledH3>Cuando pongo PLAY, no se me reproduce nada y queda todo en negro.</StyledH3>
        <StyledP>
          Uno de los problemas PRINCIPALES es que se debe desactivar la conexión segura desde el navegador, ya que el
          link de streaming es HTTP, en fin no puedo comentar mucho de esto acá pero pueden buscar info sobre
          &quot;HTTPS VS HTTP&quot; y fijarse el error que salta en consola, otros de los motivos podría ser porque
          simplemente está caído el servicio de stream.
        </StyledP>

        <StyledH3>La programación no coincide con lo que esta dando actualmente.</StyledH3>
        <StyledP>
          Primero que nada los horarios están para la región de Argentina y en segundo lugar puede que cambiaron los
          programas.
        </StyledP>
      </BoxSection>
    </>
  );
};

export default Information;
