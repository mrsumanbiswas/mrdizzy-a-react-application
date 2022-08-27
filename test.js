import { React, useState } from "react/cjs/react.production.min"



var Url = 'https://youtu.be/YBZpCv7QFhA'
Url = 'https://youtu.be/CL6UTfA4Kyg'
Url = 'https://www.youtube.com/watch?v=CL6UTfA4Kyg'




console.log(Url)


const [url, setUrl] = useState("");
const exp_1 = 'https://youtu.be/';
const exp_2 = 'https://www.youtube.com/watch?v=';

function getUrl(event) {
    setUrl(event.target.value);
}
function Youtube() {
    var Url = url
    document.cookie = "VISITOR_INFO1_LIVE=oKckVSqvaGw; path=/; domain=.youtube.com";
    window.location.reload();

    if (Url.startsWith(exp_1)) {
        Url = Url.replace(exp_1, '')
    } else if (Url.startsWith(exp_2)) {
        Url = Url.replace(exp_2, '')
    } else {
        Url = ''
    }

    if (Url != '') {
        document.getElementById('youtube').innerHTML.replace(
            `<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + Url} title="Ad-free YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
    } else {
        return (
            console.log('Your video is being played...')
        )
    }
}


