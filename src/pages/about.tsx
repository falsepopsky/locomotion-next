import Footer from 'component/footer';
import Meta from 'component/head';
import Motion from 'component/ui/motion';
import Image from 'next/image';

export default function About() {
  return (
    <Motion>
      <Meta title={'Acerca de Locomotion TV'} description={'Todo lo relacionado a Locomotion Next'} />
      <main className='flex h-full flex-col flex-nowrap gap-y-20 px-[4vw] text-sm sm:text-base'>
        <div className='relative mt-4 h-48 w-full'>
          <Image className='object-contain drop-shadow-lg' alt='Locomotion logo' src='/logo_white.png' fill />
        </div>
        <div className='flex flex-col flex-nowrap gap-y-10'>
          <h2 className='text-center text-3xl font-semibold'>Un poco de historia</h2>
          <div className='space-y-8'>
            <h3 className='max-w-max bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-2xl font-medium text-transparent dark:from-emerald-300 dark:to-sky-400'>
              ¿Qué es Locomotion TV?
            </h3>
            <p className='font-light'>
              Locomotion TV es un proyecto creado por fans y para fans que ofrece un servicio de streaming tanto de
              peliculas, ovas, animes y series para adultos basado en el antiguo canal de cable <b>Locomotion</b>, de
              los cuales los principales responsables y sitios oficiales son&#58;{' '}
              <a
                className='font-bold underline decoration-indigo-500 hover:decoration-indigo-600'
                href='https://www.facebook.com/locomotionxtv/'
              >
                Facebook
              </a>{' '}
              y{' '}
              <a
                className='font-bold underline decoration-indigo-500 hover:decoration-indigo-600'
                href='http://locomotiontv.com/envivo'
              >
                Sitio Oficial
              </a>
            </p>
          </div>
          <div className='space-y-8'>
            <h3 className='max-w-max bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-2xl font-medium text-transparent dark:from-emerald-300 dark:to-sky-400'>
              ¿Qué es Locomotion TV NEXT?
            </h3>

            <p className='font-light'>
              Locomotion TV NEXT, es un proyecto que lo desarrollé cuando el sitio oficial seguía y sigue sufriendo de
              constantes ataques DDoS, el cuál imposibilitaba visitar la página tanto como para ver el streaming, ver
              horarios, etc. Por lo cual trate de levantar rápido un sitio que me brinde la posibilidad de seguir
              disfrutando lo anteriormente mencionado.
            </p>
          </div>
          <div className='space-y-8'>
            <h3 className='max-w-max bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-2xl font-medium text-transparent dark:from-emerald-300 dark:to-sky-400'>
              ¿En que se diferencian ambas páginas?
            </h3>

            <p className='font-light'>Principalmente me enfoque en ciertos puntos</p>

            <ol className='list-inside list-disc space-y-3 marker:text-green-400'>
              <li>Diseño simple y minimalista, que sea Responsive.</li>
              <li>
                Ofrecer la programación y horarios tanto del día corriente{' '}
                <span className='font-bold'>&#40;página de inicio&#41;</span>., como semanal{' '}
                <span className='font-bold'>&#40;programación&#41;</span>.
              </li>
              <li>
                Trabajar con NEXT JS, que es un framework que me brinda las herramientas necesarias para poder
                realizarlo de manera sencilla &#40;React, APIs, SSG, etc.&#41;.
              </li>
            </ol>
          </div>
        </div>
        <div className='flex flex-col flex-nowrap gap-y-10 pb-4'>
          <h2 className='text-center text-3xl font-semibold'>F.A.Q.</h2>
          <div className='space-y-8'>
            <h3 className='max-w-max bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-2xl font-medium text-transparent dark:from-emerald-300 dark:to-sky-400'>
              ¿Te contactaste con los dueños?
            </h3>
            <p className='font-light'>
              Sí, les escribí por mensaje privado, en el cual me ofrecí tanto para cambiar su diseño o hacerlo juntos,
              en definitiva tener una charla. Pero no hubo más respuesta que solo de &quot;lo pasamos y vemos que nos
              dicen&quot; a todo esto yo lo hago gratis &#40;el código es público&#41;.
            </p>
          </div>
          <div className='space-y-8'>
            <h3 className='max-w-max bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-2xl font-medium text-transparent dark:from-emerald-300 dark:to-sky-400'>
              Cuando hago click en PLAY, el reproductor se queda cargando.
            </h3>
            <p className='font-light'>
              Uno de los problemas PRINCIPALES es que se debe desactivar la conexión segura desde el navegador, ya que
              el link de streaming es HTTP, escribir sobre esto acá es mucho pero pueden buscar información sobre
              &quot;HTTPS VS HTTP&quot; y observar el error en consola. Otros de los motivos podría ser porque
              simplemente está caído el servicio de streaming del cual no tengo control.
            </p>
          </div>
          <div className='space-y-8'>
            <h3 className='max-w-max bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-2xl font-medium text-transparent dark:from-emerald-300 dark:to-sky-400'>
              La programación no coincide con lo que esta dando actualmente.
            </h3>
            <p className='font-light'>
              Uno de los motivos es que los horarios están para la región de Argentina &#40;puedo modificarlo para
              mostrar el horario correcto dependiendo el país pero dado al siguiente problema nunca me atreví a
              realizarlo.&#41; o uno que está fuera de mi alcance es que simplemente ellos cambiaron la programación sin
              aviso lo cual lo hace inconsistente.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Motion>
  );
}
