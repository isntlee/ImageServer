import axios from 'axios';
import {useState} from 'react';

function ButtonTwo() {

  const [name, setName ] = useState("");
  const getName = () => {
    axios.get('/button_two').then(res => {
        setName(res.data)
        }
    );
  };
    return (
      <div className="button_two">
        <h2>Button 2</h2>
          <button onClick={getName}>Click</button>
        <h4>{name}</h4>
      </div>
    );
}
    export default ButtonTwo
