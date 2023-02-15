import axios from 'axios';
import {useState} from 'react';

function ButtonOne() {

  const [load, setLoad ] = useState("");
  const getLoad = () => {
    axios.get('/button_one').then(res => {
        setLoad(res.data)
        }
    );
  };
    return (
      <div className="button_one" >
        <h2>Button 1</h2>
          <button onClick={getLoad}>Click</button>
        <h4>{load}</h4>
      </div>
    );
}
    export default ButtonOne
