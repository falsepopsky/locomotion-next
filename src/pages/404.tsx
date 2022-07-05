import Meta from 'component/head';
import { Main } from 'component/ui';

export default function Custom404() {
  return (
    <>
      <Meta />
      <Main page colorFondo>
        <h1>404 - Page Not Found</h1>
      </Main>
    </>
  );
}
