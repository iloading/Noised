//Se o click do utilizador foi demasido perto do final da página, a preview vai ser renderizada mais atrás
export function resizePlaylistPreview(position) {
  let novaPosicaoX;
  let novaPosicaoY;

  if (
    position &&
    position.x > window.parent.innerWidth - window.parent.innerWidth * 0.25
  ) {
    novaPosicaoX = window.parent.innerWidth - window.parent.innerWidth * 0.265;
    return { ...position, x: novaPosicaoX };
  } else if (
    position &&
    position.y > window.parent.innerHeight - window.parent.innerWidth * 0.3
  ) {
    novaPosicaoY = window.parent.innerHeight - window.parent.innerWidth * 0.31;
    return { ...position, y: novaPosicaoY };
  } else {
    try {
      return position;
    } catch {}
  }
}
