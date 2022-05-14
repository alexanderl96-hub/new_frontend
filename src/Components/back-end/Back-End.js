export const apiURL = () => {
    return window.location.hostname === "localhost" 
    ? "http://localhost:9000" : 
    "http://my-baseball-teams.herokuapp.com/";
}
