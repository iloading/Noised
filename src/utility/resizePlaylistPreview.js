//Se o click do utilizador foi demasido perto do final da página, a preview vai ser renderizada mais atrás
export function resizePlaylistPreview(position) {
  let novaPosicaoX;
  let novaPosicaoY;
  let novaPosicao = position;
  if (
    position &&
    position.x > window.parent.innerWidth - window.parent.innerWidth * 0.25
  ) {
    novaPosicaoX = window.parent.innerWidth - window.parent.innerWidth * 0.265;
    novaPosicao = { ...novaPosicao, x: novaPosicaoX };
  }
  if (
    position &&
    position.y > window.parent.innerHeight - window.parent.innerWidth * 0.3
  ) {
    novaPosicaoY = window.parent.innerHeight - window.parent.innerWidth * 0.31;
    novaPosicao = { ...novaPosicao, y: novaPosicaoY };
  }

  return novaPosicao;
}
