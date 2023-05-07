const api_key = "S1Lx5cU21l4wwuk8NviDlm5I0yzOOTPX";

export default function getGifs(keyword) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=5&offset=0&rating=pg-13&lang=en`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { id, title } = image;
        const { url } = image.images.downsized;
        return { id, title, url };
      });

      return gifs;
    });
}
