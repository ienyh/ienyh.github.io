; ((win, doc) => {
  const canvas = doc.querySelector('#can');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.arc(250, 250, 250, 0, Math.PI * 2, false);
  ctx.fillStyle = 'rgb(6, 40, 90)';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(250, 300, 200, 0, Math.PI * 2, false);
  ctx.fillStyle = 'rgb(38, 99, 200)';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(250, 350, 150, 0, Math.PI * 2, false);
  ctx.fillStyle = 'rgb(199, 202, 211)';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(250, 400, 100, 0, Math.PI * 2, false);
  ctx.fillStyle = 'rgb(38, 99, 200)';
  ctx.fill();
  ctx.closePath();
})(window, document)