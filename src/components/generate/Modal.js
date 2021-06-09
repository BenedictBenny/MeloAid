import Card from "../ui/Card";

function Modal(props) {
  const songs = props.songList;
  return (
    <div className="modal">
      <h2>Checkout the melodies you inspired 🎶</h2>

      <div>
        <Card>
          <h3>1st Generated Melody :</h3>
          <audio controls>
            <source
              src={`https://api.meloaid.com/songs/${songs[0]}`}
              type="audio/mpeg"
            ></source>
          </audio>
        </Card>
      </div>
      <div>
        <Card>
          <h3>2nd Generated Melody :</h3>
          <audio controls>
            <source
              src={`https://api.meloaid.com/songs/${songs[1]}`}
              type="audio/mpeg"
            ></source>
          </audio>
        </Card>
      </div>
      <div>
        <Card>
          <h3>3rd Generated Melody :</h3>

          <audio controls>
            <source
              src={`https://api.meloaid.com/songs/${songs[2]}`}
              type="audio/mpeg"
            ></source>
          </audio>
        </Card>
      </div>
    </div>
  );
}

export default Modal;
