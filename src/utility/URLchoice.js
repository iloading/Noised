export function chooseURL(type, id) {
  let prevURL;
  switch (type) {
    case "playlist":
      return (prevURL = `/playlist_prev/${id}`);

    case "album":
      return (prevURL = `/album_prev/${id}`);

    case "artist":
      return (prevURL = `/artist_prev/${id}`);

    case "podcast":
      return (prevURL = `/podcast_prev/${id}`);

    default:
      return prevURL;
  }
}
