import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'


class App extends Component {
    state={
        selectedFile: '',
        loaded: 0,
    }


    handleUpload = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile, this.state.selectedFile.name)

 console.log("Uploading... "+this.state.selectedFile.name);
        axios
            .post('http://localhost:3000/upload', data, {
                onUploadProgress: ProgressEvent => {
                    this.setState({
                        loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
                    })
                },
            })
            .then(res => {
                console.log(res.statusText)
                console.log(res)
            }).catch(err=>{
            console.log(err);
        })

    }

    handleselectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }


    render() {


        return (
            <div className="App">

                    <input type="file" name="" id="" onChange={this.handleselectedFile} />
                    <button onClick={this.handleUpload}>Upload</button>

            </div>
        );
    }
}

export default App;
