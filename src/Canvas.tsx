import React, { useEffect, useRef } from "react";

const Canvas = (props: any) => {
  const canvasRef = useRef(null);

  const drawBackground = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.fillStyle = "#4caf4f";
    ctx.rect(0, 0, 1000, 550);
    ctx.fill();
  };

  const textNumberTop = (ctx: CanvasRenderingContext2D) => {
    ctx.font = "40px Arial";
    ctx.scale(-1, -1);
    ctx.fillText("-1 0", -186, -99);
    ctx.fillText("-2 0", -330, -99);
    ctx.fillText("-3 0", -471, -99);
    ctx.fillText("-4 0", -613, -99);
    ctx.fillText("-5 0", -755, -99);
    ctx.fillText("-1 0", -899, -99);

  };

  const textNumberBottom = (ctx: CanvasRenderingContext2D) => {
    ctx.font = "40px Arial";
    ctx.fillText("-1 0", 105, 450);
    ctx.fillText("-2 0", 246, 450);
    ctx.fillText("-3 0", 389, 450);
    ctx.fillText("-4 0", 531, 450);
    ctx.fillText("-5 0", 673, 450);
    ctx.fillText("-1 0", 815, 450);
  };

  const drawUpperLine = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "white";

    ctx.beginPath();
    ctx.rect(0, 30, 1000, 8);
    ctx.closePath();

    ctx.fill();
  };

  const drawBottomLine = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "white";

    ctx.beginPath();
    ctx.rect(0, 510, 1000, 8);
    ctx.closePath();

    ctx.fill();
  };

  const drawYardLine = (ctx: CanvasRenderingContext2D, yardAxisX: number) => {
    ctx.beginPath();
    ctx.rect(yardAxisX, 30, 8, 488);
    ctx.closePath();

    ctx.fill();
  };

  const drawFiveYardsLines = (ctx: CanvasRenderingContext2D) => {
    // @todo create the yards array based in a number (7 yards line / 1000)
    // let array = new Array(7).fill(null);
    // const yards = array
    //   .map((_, index) => (1000 / (index + 1)).toFixed(0))
    //   .sort();

    const yards = [142, 284, 426, 568, 710, 852];

    return yards.map((yardAxisX) => drawYardLine(ctx, yardAxisX));
  };

  const drawYardsSmallLines = (ctx: CanvasRenderingContext2D, yardAxisY) => {
    let based = 28.4;

    // @todo improve this while
    while (based < 990) {
      ctx.beginPath();
      ctx.rect(based, yardAxisY, 8, 30);
      ctx.closePath();

      ctx.fill();
      based = based + 28.4;
    }
  };

  const drawUpperSmallYardsLines = (ctx: CanvasRenderingContext2D) => {
    drawYardsSmallLines(ctx, 30);
  };

  const drawBottomSmallYardsLines = (ctx: CanvasRenderingContext2D) => {
    drawYardsSmallLines(ctx, 485);
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    drawBackground(ctx);
    drawUpperLine(ctx);
    textNumberTop(ctx)
    textNumberBottom(ctx);
    drawBottomLine(ctx);
    drawFiveYardsLines(ctx);
    drawUpperSmallYardsLines(ctx);
    drawBottomSmallYardsLines(ctx);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context: CanvasRenderingContext2D = canvas?.getContext("2d")!;

    if (context) {
      draw(context);
    }
  }, [draw]);

  return <canvas ref={canvasRef} {...props} width={1000} height={1000} />;
};

export default Canvas;
