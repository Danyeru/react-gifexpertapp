export const getGifs = async (category) => {
  const url =
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=7zdBDYKv2v8M43wKQ9y9BY6rC9BrJBCx`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      image: img.images.downsized_medium.url,
    };
  });

  return gifs;
};