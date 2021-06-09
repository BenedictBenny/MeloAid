import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import "./Generate.css";
import axios from "axios";

function Generate(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [songList, fillSongList] = useState(null);
  async function handleGenerateMelody(){
    const response = await axios.get("https://api.meloaid.com/genMelody");
    const songs = await response.data.files;
    fillSongList(songs);
    setModalIsOpen(true);
      // .then(function (response) {
      //   console.log(response);
      //   return response.data.files;
      // });
      // if(songList != null){
      //   setModalIsOpen(true);
      // }
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleGenerateMelody}>
          Generate Melodies
        </button>
      </div>
      {modalIsOpen && (
        <Modal songList={songList}/>
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );

}
export default Generate;
