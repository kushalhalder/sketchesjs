const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
const tweakpane = require('tweakpane');

const settings = {
  dimensions: [ 2160, 2160 ],
	// animate: true
};

const params = {
	cols: 4,
	rows: 8,
	scaleMin: 1,
	scaleMax: 30,
	freq: 0.001,
	amp: 0.2,
	lineCap: 'butt',
};

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cols = params.cols;
    const rows = params.rows;
    const numCells = cols * rows;

    const gridw = width  * 0.5;
    const gridh = height * 0.5;
    const cellw = gridw / cols;
    const cellh = gridh / rows + 100;
    const margx = 0;
    const margy = 100;

    let i = 0;
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);
    
    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, -0.25);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.25);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, -0.25);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.25);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, -0.25);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.25);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, -0.25);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.25);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);
    
    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, -0.5);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, 1);

    i++;
    draw(context, i, cols, cellw, cellh, margx, margy, 0);
    draw(context, i, cols, cellw, cellh, margx, margy, 0.5);
  };
};

const draw = (context, i, cols, cellw, cellh, margx, margy, angle) => {
  const col = i % cols;
  const row = Math.floor(i / cols);

  const x = col * cellw;
  const y = row * cellh;
  const w = cellw * 0.5;
  const h = cellh * 0.5;

  context.lineWidth = 4;
  context.lineCap = params.lineCap;

  context.save();
  context.translate(x, y);
  context.translate(margx, margy);
  context.translate(cellw * 0.5, 0);

  context.rotate(angle * Math.PI);
  context.beginPath();
  context.moveTo(w * -0.5, 0);
  context.lineTo(w *  0, 0)
  context.stroke();
  
  context.restore();
}

const createPane = () => {
	const pane = new tweakpane.Pane();
	let folder;

	folder = pane.addFolder({title: 'Grid'});
	folder.addInput(params, 'lineCap', { options: { butt: 'butt', round: 'round', square: 'square' }});
	folder.addInput(params, 'cols', {min: 4, max: 50, step: 1});
	folder.addInput(params, 'rows', {min: 8, max: 50, step: 1});
	folder.addInput(params, 'scaleMin', {min: 1, max: 100});
	folder.addInput(params, 'scaleMax', {min: 1, max: 100});

	folder = pane.addFolder({title: 'Noise'});
	folder.addInput(params, 'freq', {min: -0.001, max: 0.01});
	folder.addInput(params, 'amp', {min: 0, max: 1});
};

createPane();
canvasSketch(sketch, settings);
