import axios from "axios";
import Generate from "../components/generate/Generate";
import "./Upload.css";
import React, { Component } from "react";
import { loadProgressBar } from "x-axios-progress-bar";
import "x-axios-progress-bar/dist/nprogress.css";


// Initialize player and register event handler

class Ap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initially, no file is selected
      selectedFile: null,
      didUploadFile: false,
      songScale: null,
    };
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    //console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    var self = this;
    axios
      .post("https://api.meloaid.com/upload", formData)
      .then(function (response) {
        self.setState({
          songScale: response.data.key,
          didUploadFile: true,
        });
      })
      .catch((err) => {
        if (err.response) {
          alert("We seem to be experiencing a problem, please retry later");
          // client received an error response (5xx, 4xx)
        } else if (err.request) {
          alert("Unable to communicate with server, please try later");
        } else {
          console.log(err);
          // alert('Unexpected error encountered, sorry for inconvience');
        }
      });
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          {this.state.songScale && (
            <h3>Scale of uploaded File {this.state.songScale} </h3>
          )}
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        {loadProgressBar()}
        <h1>Upload here</h1>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button className="btn" onClick={this.onFileUpload}>
            Upload!
          </button>
        </div>
        {this.fileData()}
        <div>{this.state.didUploadFile && <Generate> </Generate>}</div>
      </div>
    );
  }
}

export default Ap;
