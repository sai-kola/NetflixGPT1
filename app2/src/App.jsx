import { Toaster } from 'react-hot-toast';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Toaster position="top-center" />
      <Body />
    </Provider>
  );
}

export default App;
