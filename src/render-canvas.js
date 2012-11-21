define(['canvas'], function(Canvas){
  
  function RenderCanvas(container, canvas){
    Canvas.call(this, container, canvas);

    this.canvas.addEventListener('drop', function(e){
      e.preventDefault();
      e.stopPropagation();
      return false;
    }, false);
  }

  RenderCanvas.prototype = Object.create(Canvas.prototype);

  RenderCanvas.prototype.render = function(inputCanvases){
    var _canvas = this.canvas;

    var canvas1 = inputCanvases[0].canvas;
    var canvas2 = inputCanvases[1].canvas;

    var offsetX1 = inputCanvases[0].offsetX;
    var offsetX2 = inputCanvases[1].offsetX;

    var offsetY1 = inputCanvases[0].offsetY;
    var offsetY2 = inputCanvases[1].offsetY;

    var ctx = _canvas.getContext('2d');
    ctx.clearRect(0, 0, _canvas.width, _canvas.height);
    ctx.globalAlpha = 0.5;
    
    console.log(offsetX1, offsetY1);
    //ctx.drawImage(canvas1, offsetX1, offsetY1);
    //ctx.drawImage(canvas2, offsetX2, offsetY2);
  };

  return RenderCanvas;

});