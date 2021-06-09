function Modal(props) {

  const songs = props.songList;
  return (
    <div className="modal">
      <h2>
        Checkout the songs you inspired 🎶
      </h2>
     
        <audio controls>
          <source src={`https://api.meloaid.com/songs/${songs[0]}`} type="audio/wav"></source>
        </audio>
        <audio controls>
        <source src={`https://api.meloaid.com/songs/${songs[1]}`} type="audio/wav"></source>
      </audio>
      <audio controls>
        <source src={`https://api.meloaid.com/songs/${songs[2]}`} type="audio/wav"></source>
      </audio>
     
    </div>
  );
}

export default Modal;
