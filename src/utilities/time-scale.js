function hours(count){
	return count * 60 * 60 * 1000;
}

function minutes(count){
	return count * 60 * 1000;
}

function seconds(count){
	return count * 1000;
}

const intraDayWeightDivisors = [
	// TODO: divisor=1 means 1ms and it's strange that weight for 1ms > weight for 1s
	{ divisor: 1, weight: 20 },
	{ divisor: seconds(1), weight: 19 },
	{ divisor: minutes(1), weight: 20 },
	{ divisor: minutes(5), weight: 21 },
	{ divisor: minutes(30), weight: 22 },
	{ divisor: hours(1), weight: 30 },
	{ divisor: hours(3), weight: 31 },
	{ divisor: hours(6), weight: 32 },
	{ divisor: hours(12), weight: 33 },
];

function coordinateFromTime(time, prevTime = null) {
	if (prevTime !== null) {
		const prevDate = new Date(prevTime);
		const currentDate = new Date(time);

		if (currentDate.getUTCFullYear() !== prevDate.getUTCFullYear()) {
			return 70;
		} else if (currentDate.getUTCMonth() !== prevDate.getUTCMonth()) {
			return 60;
		} else if (currentDate.getUTCDate() !== prevDate.getUTCDate()) {
			return 50;
		}

		for (let i = intraDayWeightDivisors.length - 1; i >= 0; --i) {
			if (Math.floor(prevDate.getTime() / intraDayWeightDivisors[i].divisor) !== Math.floor(currentDate.getTime() / intraDayWeightDivisors[i].divisor)) {
				return intraDayWeightDivisors[i].weight;
			}
		}
	}

	return 20;
}

export function addXPoints(ultimateXScalePoints, start) {
	let prevTime = 0;
	let totalTimeDiff = 0;

	for (let index in ultimateXScalePoints) {
		const currentPoint = ultimateXScalePoints[index];
		currentPoint.weight = coordinateFromTime(currentPoint.time, prevTime);
		totalTimeDiff += currentPoint.time - (prevTime || currentPoint.time);
		prevTime = currentPoint.time;
	}
}
