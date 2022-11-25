import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SignaturePad from 'react-signature-canvas';
import './sigCanvas.css'
import { useRef, useState } from 'react';

function App() {
  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  const saveSignature = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  return (
    <div className="App">
      <>
        <h1>Ejemplo de firmar en react</h1>
        <Popup modal trigger={<button>trigger</button>}
          closeOnEscape={false}
          closeOnDocumentClick={false}
          contentStyle={{ width: '90vw', height: '90vh' }}>
          {close => (
            <>
              <SignaturePad
                ref={sigCanvas}
                canvasProps={{
                  className: "signature"
                }} />
              <button onClick={close}>cerrar</button>
              <button onClick={clear}>limpiar</button>
              <button onClick={saveSignature}>guardar</button>
            </>
          )}
        </Popup>
      </>
      {imageURL ?
        <img src={imageURL} alt='firma'
          style={{
            display: 'block',
            margin: '0 auto',
            marginTop: '2em',
            border: '1px solid black',
            width: '50vw',
            height: '30vh'
          }}></img>
        :
        null
      }
    </div>
  );
}

export default App;
