const startEl = document.getElementById('startVal');
const endEl = document.getElementById('endVal');
const deltaEl = document.getElementById('delta');
const percentEl = document.getElementById('percent');
const noData = '----';

function update() {
    const start = parseFloat(startEl.value);
    const end = parseFloat(endEl.value);
    
    if (isNaN(start) || isNaN(end)) {
        deltaEl.textContent = noData;
        percentEl.textContent = noData;
        return;
    }

    const delta = end - start;
    const percent = (start === 0) ? NaN : (delta/start)*100;
    deltaEl.textContent = Number.isFinite(delta) ? delta.toFixed(2): noData;
    percentEl.textContent = Number.isFinite(percent) ? percent.toFixed(2) : noData;
}

startEl.addEventListener('input', update);
endEl.addEventListener('input', update);