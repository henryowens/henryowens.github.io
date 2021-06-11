export interface Preset {
  x: number;
  y: number;
  s: number;
  w: number;
  r: number;
  dx: number;
  dy: number;
  dr: number;
  draw: (ctx: CanvasRenderingContext2D, t: number) => void;
}

export interface Presets {
  o?: (
    x: number,
    y: number,
    s: number,
    dx: number,
    dy: number,
    dr: number,
    r: number
  ) => Preset;
  x?: (
    x: number,
    y: number,
    s: number,
    dx: number,
    dy: number,
    dr: number,
    r: number
  ) => Preset;
}

function getPresets(
  x: number,
  y: number,
  s: number,
  dx: number,
  dy: number,
  dr: number,
  r: number
) {
  r = r || 0;
  return {
    x: x,
    y: y,
    s: 20 * s,
    w: 5 * s,
    r: r,
    dx: dx,
    dy: dy,
    dr: dr,
    draw: function (ctx: CanvasRenderingContext2D, t: number) {
      this.x += this.dx;
      this.y += this.dy;
      this.r += this.dr;

      const _this = this;
      const line = function (
        x: number,
        y: number,
        tx: number,
        ty: number,
        c: string,
        o?: number | undefined
      ) {
        o = o || 0;
        ctx.beginPath();
        ctx.moveTo(-o + (_this.s / 2) * x, o + (_this.s / 2) * y);
        ctx.lineTo(-o + (_this.s / 2) * tx, o + (_this.s / 2) * ty);
        ctx.lineWidth = _this.w;
        ctx.lineWidth = 1;
        ctx.strokeStyle = c;
        ctx.stroke();
      };

      ctx.save();

      ctx.translate(
        this.x + Math.sin((x + t / 10) / 100) * 5,
        this.y + Math.sin((10 + x + t / 10) / 100) * 2
      );
      ctx.rotate((this.r * Math.PI) / 180);

      line(0, 0, 0, 1, "#353535");
      line(0, 0, 1, 0, "#353535");

      ctx.restore();
    },
  };
}

export function background(): void {
  const Canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = Canvas.getContext("2d");
  const elements: Array<Preset> = [];
  const presets: Presets = {};

  // presets.o = (
  //   x: number,
  //   y: number,
  //   s: number,
  //   dx: number,
  //   dy: number,
  //   dr: number,
  //   r: number
  // ) => getPresets(x, y, s, dx, dy, dr, r);

  presets.x = (
    x: number,
    y: number,
    s: number,
    dx: number,
    dy: number,
    dr: number,
    r: number
  ) => getPresets(x, y, s, dx, dy, dr, r);

  for (let x = 0; x < Canvas.width; x++) {
    for (let y = 0; y < Canvas.height; y++) {
      if (Math.round(Math.random() * 10000) == 1) {
        // const s = (Math.random() * 5 + 1) / 10;
        elements.push(
          presets.x(
            x,
            y,
            1,
            0,
            0,
            (Math.random() * 3 - 1) / 10,
            Math.random() * 360
          )
        );
      }
    }
  }

  setInterval(function () {
    ctx?.clearRect(0, 0, Canvas.width, Canvas.height);

    const time = new Date().getTime();
    for (const e in elements)
      elements[e].draw(ctx as CanvasRenderingContext2D, time);
  }, 10);
}
