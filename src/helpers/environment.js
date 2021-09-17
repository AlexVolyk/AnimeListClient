let APIURL = '';
switch (window.location.hostname) {
    case "localhost" || "127.0.0.1":
        APIURL = "http://localhost:3000";
        break;

    case "avanimelist.herokuapp.com":
        // "https://aaanimelist.herokuapp.com"
        APIURL = "https://aaanimelist.herokuapp.com";
        break;

    default:
        break;
}

export default APIURL;