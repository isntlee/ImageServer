import axios from 'axios';
import {useState} from 'react';

function Button() {

  const [load, setLoad ] = useState("");
  const getLoad = () => {
    axios.get('/button_one').then(res => {
        setLoad(res.data)
        }
    );
  };

  const [name, setName ] = useState("");
  const getName = () => {
    axios.get('/button_two').then(res => {
        setName(res.data)
        }
    );
  };
    return (
    <div>
      <div className="button_one" >
        <h2>Button 1</h2>
          <button onClick={getLoad}>Click</button>
        <h4>{load}</h4>
      </div>

      <div className="button_two">
        <h2>Button 2</h2>
          <button onClick={getName}>Click</button>
        <h4>{name}</h4>
      </div>
    </div>
    );
}
    export default Button
