import Card from "../ui/Card";

function Modal(props) {
  const songs = props.songList;
  return (
    <div className="modal">
      <h2>Checkout the songs you inspired 🎶</h2>

      <div>
        <Card>
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
          <audio controls>
            <source
              src={`https://api.meloaid.com/songs/${songs[1]}`}
              type="audio/mpeg"
            ></source>
          </audio>
        </Card>
      </div>
      <Card>
        <div>
          <audio controls>
            <source
              src={`https://api.meloaid.com/songs/${songs[2]}`}
              type="audio/mpeg"
            ></source>
          </audio>
        </div>
      </Card>
    </div>
  );
}

export default Modal;
