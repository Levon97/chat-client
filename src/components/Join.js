import { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from './Background';
function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <Background>
      <div className="row d-flex justify-content-center ">
        <div className="col d-flex justify-content-center">
          <form>
            <div className="form-group ">
              <label htmlFor="nickname">Nickname</label>
              <input
                type="text"
                className="form-control"
                id="nickName"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter nickname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="room">room</label>
              <input
                type="text"
                className="form-control"
                id="room"
                onChange={(e) => {
                  setRoom(e.target.value);
                }}
                placeholder="room"
              />
            </div>
            <div className="form-group m-3">
              <div className="d-flex justify-content-center">
                <Link to={`./chat?name=${name}&room=${room}`}>
                  <button type="submit" className="btn btn-primary blankButton">
                    Submit
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Background>
  );
}

export default Join;
