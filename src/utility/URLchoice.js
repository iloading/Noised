export function chooseURL(type, id) {
  let prevURL;
  switch (type) {
    case "_playlist":
      return (prevURL = `/playlist_prev/${id}`);

    case "_album":
      return (prevURL = `/album_prev/${id}`);

    case "_artist":
      return (prevURL = `/artist_prev/${id}`);

    case "_podcast":
      return (prevURL = `/podcast_prev/${id}`);

    default:
      break;
  }
}
