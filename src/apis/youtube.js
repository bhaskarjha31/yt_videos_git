import Axios from "axios";

const KEY = "AIzaSyDegSeXrsatMoIPZTHf2CsKVQ2Anz7JhG8";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
