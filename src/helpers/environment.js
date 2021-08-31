let APIURL = '';
switch (window.location.hostname) {
    case "localhost" || "127.0.0.1":
        APIURL = "https://localhost:3000";
        break;

    case "avanimelist.herokuapp.com":
        APIURL = "https://avanimelist.herokuapp.com";
        break;

    default:
        break;
}

export default APIURL;