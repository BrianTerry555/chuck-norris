import axios from "axios";


export function getJoke(text) {
  return (dispatch) => {
    return axios.get("https://api.chucknorris.io/jokes/random").then((response)=>{
      dispatch(origText(response.data.value));
    }).catch((err) => {
      throw err;
    })
  }
}


export function origText(text) {
  return {
    type: "ORIG_TEXT",
    text
  }
}
