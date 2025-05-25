import { Canvas } from '@react-three/fiber';
import MarsModel from './components/MarsModel';

function App() {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <header style={{
      padding: '1rem',
        textAlign: 'center',
        fontSize: '1rem',
        background: 'linear-gradient(to right, #b22222, #ff6f00, #000000)', // Mars red gradient
        borderBottom: '1px solid #222'
      }}>
        🚀 Welcome home, Martian 👽
      </header>
      <Canvas style={{ background: 'black' }}>
        <MarsModel />
      </Canvas>
    </div>
  );
}

export default App;
