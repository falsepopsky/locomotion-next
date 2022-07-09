import { BoxSection, HeaderMax, HeaderMin, Paragraph } from '../ui';

const Faq = () => (
  <BoxSection>
    <HeaderMax>F.A.Q.</HeaderMax>

    <HeaderMin>
      ¿Te contactaste con los dueños de la página para ver si podian mejorar la página o trabajar con ellos?
    </HeaderMin>
    <Paragraph>
      Sí, les escribí por mensaje privado 2 veces en FB, en el cual me ofrecí tanto para cambiar su diseño o hacerlo
      juntos, pero no hubo más respuesta que solo de &quot;lo pasamos y vemos que nos dicen&quot;.
    </Paragraph>

    <HeaderMin>Cuando hago click en PLAY, el reproductor se queda cargando o está todo en negro.</HeaderMin>
    <Paragraph>
      Uno de los problemas PRINCIPALES es que se debe desactivar la conexión segura desde el navegador, ya que el link
      de streaming es HTTP, escribir sobre esto acá es mucho pero pueden buscar información sobre &quot;HTTPS VS
      HTTP&quot; y observar el error en consola. Otros de los motivos podría ser porque simplemente está caído el
      servicio de streaming, del cual no tengo control.
    </Paragraph>

    <HeaderMin>La programación no coincide con lo que esta dando actualmente.</HeaderMin>
    <Paragraph>
      Primero que nada los horarios están para la región de Argentina o simplemente porque ellos cambiaron la
      programación.
    </Paragraph>
  </BoxSection>
);

export default Faq;
