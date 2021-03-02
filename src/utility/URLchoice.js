export function chooseURL(type, id, paginaAtual) {
  let prevURL;
  if (paginaAtual === "home") {
    switch (type) {
      case "playlist":
        return (prevURL = `/${paginaAtual}/playlist_prev/${id}`);

      case "album":
        return (prevURL = `/${paginaAtual}/album_prev/${id}`);

      case "artist":
        return (prevURL = `/${paginaAtual}/artist_prev/${id}`);

      // case "podcast":
      //   return (prevURL = `/podcast_prev/${id}`);

      default:
        return prevURL;
    }
  } else {
    return (prevURL = `/${paginaAtual}`);
  }
}
