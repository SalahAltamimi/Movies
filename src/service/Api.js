import axios from "axios";

const key = "53f9eba3";
export async function Api(query) {
  if (query.length) {
    const res = await axios({
      method: "GET",
      url: `https://www.omdbapi.com/?apikey=${key}&s=${query}`,
    });
    // if (res.data.Response === "False") throw new Error(res.data.Error);
    // if (res.data)
    return res;
  }
}
export async function Api2(select) {
  const res = await axios({
    method: "GET",
    url: `https://www.omdbapi.com/?apikey=${key}&i=${select}`,
  });
  // if (res.data.Response === "False") throw new Error(res.data.Error);
  // if (res.data)
  return res;
}
