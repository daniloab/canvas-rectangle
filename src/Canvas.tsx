import React, { useEffect, useRef } from "react";

const Canvas = (props: any) => {
  const canvasRef = useRef(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.fillStyle = "#4caf4f";
    ctx.rect(30, 30, 900, 550);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context: CanvasRenderingContext2D = canvas?.getContext("2d")!;

    if (context) {
      draw(context);
    }
  }, [draw]);

  return <canvas ref={canvasRef} {...props} width={900} height={900} />;
};

export default Canvas;
