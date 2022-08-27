import { React, useState } from "react";

function Body() {
    const [url, setUrl] = useState("");
    const exp_1 = 'https://youtu.be/';
    const exp_2 = 'https://www.youtube.com/watch?v=';

    function getUrl(event) {
        setUrl(event.target.value);
    }

    function Clear() {
        if (url !== "") {
            return (
                <a href="">
                    <img id="clear-img" src="media/interface/wrong.png" alt="clear/refress button" />
                </a>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    function Frame() {

        var Url = url

        if (Url.startsWith(exp_1)) {
            Url = Url.replace(exp_1, '')
        } else if (Url.startsWith(exp_2)) {
            Url = Url.replace(exp_2, '')
        } else {
            Url = ''
        }

        if (Url === "") {
            return (
                <center>
                    <h3>The video will be shown here ...</h3>
                    <img src={'media/vector/bee.png'} alt="" />
                </center>
            )
        } else {
            Url = "https://www.youtube.com/embed/" + Url
            return (
                <center>
                <iframe width="auto" height="auto" src={Url} title="Ad-free YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" allowfullscreen="true">
                </iframe>
                </center>
            )
        }
    }

    return (
        <div id="YT" >
            <h1>Youtube Ad-free Video player</h1>
            <div id="Input">
                <input type="text" placeholder="Enter YouTube video URL" onChange={getUrl} />
                <Clear />
            </div>
            <div id="youtube">
                <Frame />
            </div>
        </div>
    );
}

export default Body;

