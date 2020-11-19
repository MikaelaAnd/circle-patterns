window.addEventListener('load', main);

function main() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    setFullScreen(canvas);
    draw(context);
}

function draw(context) {
    const radius = window.innerWidth * 0.15;
    const nrOfDots = 8;
    const multiplier = 2;

    drawCircle(context, radius);
    drawDotsOnCircle(context, radius, nrOfDots);
    //drawLinesBetweenDots(context);
}

/**
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} radius
 * @param {Number} nrOfDots
 */

function drawCircle(context, radius) {
    context.strokeStyle = 'lightgrey';
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    context.closePath();

    context.stroke();
}
/**
 * Ritar ett antal punker på cirkeln
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} radius 
 * @param {Number} nrOfDots 
 */

function drawDotsOnCircle(context, radius, nrOfDots) {
    context.fillStyle = 'red';
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const dotRadius = radius / 30;

    // Formler baserat på "Enhetscirkeln"
    // radius * cos(angle) = x
    // radius * sin(angle) = y

    for (let i = 0; i < nrOfDots; i++) {
        const angle = Math.PI * 2 / nrOfDots * i;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        console.log(i, x, y);
        context.beginPath();
        context.arc(x, y, dotRadius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }

}

function setFullScreen(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}