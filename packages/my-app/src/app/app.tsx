import NxWelcome from './nx-welcome';
import {Shared} from '@cypress-poc/shared/index';

export function App() {
  return (
    <>
      <Shared/>
      <NxWelcome title="my-app" />

      <div />
    </>
  );
}

export default App;
