const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
const tweakpane = require('tweakpane');

const settings = {
  dimensions: [ 1080, 1080 ],
	animate: true
};

const params = {
	cols: 10,
	rows: 10,
	scaleMin: 1,
	scaleMax: 10,
	freq: 0.0005,
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

		const gridw = width * 0.8;
		const gridh = height * 0.8;
		const cellw = gridw / cols;
		const cellh = gridh / rows;
		const margx = (width  - gridw) * 0.5;
		const margy = (height - gridh) * 0.5;

		for (let i = 0; i < numCells; i++) {
			const col = i % cols;
			const row = Math.floor(i / cols);

			const x = col * cellw;
			const y = row * cellh;
			const w = cellw * 0.8;
			const h = cellh * 0.8;

			const n = random.noise2D(x + frame * 10, y, params.freq);
			const angle1 = n * Math.PI;
			const angle2 = n * Math.PI;
			const scale = math.mapRange(n, -1, 1, params.scaleMin, params.scaleMax);

			// clock
			context.save();
			context.beginPath();
			context.translate(x, y);
			context.translate(margx, margy);
			context.translate(cellw * 0.5, cellh * 0.5);

			context.arc(0, 0, cellw * 0.5 - 6, 0, Math.PI * 2)
			context.stroke();

			context.restore();

			// one hand
			context.save();

			context.translate(x, y);
			context.translate(margx, margy);
			context.translate(cellw * 0.5, cellh * 0.5);
						
			context.lineWidth = 2;
			context.lineCap = params.lineCap;

			context.rotate(angle1);
			context.beginPath();
			context.moveTo(w * -0.5, 0);
			context.lineTo(0, 0)
			context.stroke();

			context.restore();

			// second hand
			context.save();
			
			context.translate(x, y);
			context.translate(margx, margy);
			context.translate(cellw * 0.5, cellh * 0.5);

			context.lineWidth = 2;
			context.lineCap = params.lineCap;

			// context.beginPath();
			context.rotate(angle2);
			context.moveTo(0, 0);
			context.lineTo(w * 0.5, 0)
			context.stroke();

			context.restore();
		}
  };
};

const createPane = () => {
	const pane = new tweakpane.Pane();
	let folder;

	folder = pane.addFolder({title: 'Grid'});
	folder.addInput(params, 'lineCap', { options: { butt: 'butt', round: 'round', square: 'square' }});
	folder.addInput(params, 'cols', {min: 2, max: 50, step: 1});
	folder.addInput(params, 'rows', {min: 2, max: 50, step: 1});
	folder.addInput(params, 'scaleMin', {min: 1, max: 100});
	folder.addInput(params, 'scaleMax', {min: 1, max: 100});

	folder = pane.addFolder({title: 'Noise'});
	folder.addInput(params, 'freq', {min: -0.001, max: 0.01});
	folder.addInput(params, 'amp', {min: 0, max: 1});
};

createPane();
canvasSketch(sketch, settings);
