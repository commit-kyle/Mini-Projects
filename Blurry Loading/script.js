const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const btn = document.querySelector('.btn');

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let load = 0;

if (load === 0) {
	loadText.innerText = `Click to clear up`;
}

const blurring = () => {
	load++;

	if (load < 100 && load > 0) {
		loadText.innerText = `Clearing up - ${load}%`;
		bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
		clearInterval(interval);
	} else if (load > 99 && load < 101) {
		loadText.innerText = `${load}% cleared up!`;
    btn.style.display = 'none';
    loadText.style.borderLeft ='none';
	} else {
		return;
	}
};
btn.addEventListener('click', () => {
	let interval = setInterval(blurring, 40);
});
