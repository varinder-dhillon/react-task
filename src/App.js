import { useSelector } from 'react-redux';
import './App.css';
import Main from './components/page/Main';
import Modal from './components/ui/Modal'
function App() {
  const modalState = useSelector(state => state.userDataSlice.openModal)
  return (
    <>
      {modalState && <Modal />}
      <Main />
    </>
  );
}

export default App;
