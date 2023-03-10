import React, { useEffect, useState } from 'react';
import '../styles/clock.css';
function Clock() {
	const [styles, setStyles] = useState({
		5: 'white',
		3: 'white',
		2: 'white',
		1: 'white',
		'1b': 'white',
	});

	const time = {
		uhr: 4,
		min: 22,
	};

	const ft = [5, 3, 2, 1];

	const hours = {
		5: false,
		3: false,
		2: false,
		1: false,
		'1b': false,
	};

	const minuts = {
		5: false,
		3: false,
		2: false,
		1: false,
		'1b': false,
	};

	const colors = {
		5: 'white',
		3: 'white',
		2: 'white',
		1: 'white',
		'1b': 'white',
	};

	const coloring = () => {
		for (const [key] of Object.entries(colors)) {
			if (hours[key] && minuts[key]) {
				colors[key] = 'blue';
			} else if (hours[key]) {
				colors[key] = 'red';
			} else if (minuts[key]) {
				colors[key] = 'green';
			}
		}
		setStyles(colors);
	};

	const colorSeperator = () => {
		let { uhr, min } = time;
		ft.map((t) => {
			if (uhr >= t) {
				hours[t] = true;
				uhr = uhr - t;
			}
			if (min >= t * 5) {
				minuts[t] = true;
				min = min - t * 5;
			}
		});
		if (uhr > 0) {
			hours['1b'] = true;
		}
		if (min >= 5) {
			minuts['1b'] = true;
		}

		console.log({ hours, minuts });
		coloring();
	};
	useEffect(() => {
		colorSeperator();
	}, [time.min, time.uhr]);

	return (
		<div className="clock">
			<div className="rest ">
				<div className="rest-up">
					<div
						className="two"
						style={{ backgroundColor: styles[2] }}
					>
						{styles[2]}
					</div>
					<div className="smalls">
						<div
							className="small small-up one"
							style={{ backgroundColor: styles[1] }}
						>
							{styles[1]}
						</div>
						<div
							className="small small-down one"
							style={{ backgroundColor: styles['1b'] }}
						>
							{' '}
							{styles[1]}
						</div>
					</div>
				</div>
				<div
					className="rest-down three"
					style={{ backgroundColor: styles[3] }}
				>
					{' '}
					{styles[3]}
				</div>
			</div>
			<div
				className=" five "
				style={{ backgroundColor: styles[5] }}
			>
				{' '}
				{styles[5]}
			</div>
		</div>
	);
}

export default Clock;
