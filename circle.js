window.addEventListener('load', main);

function main() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    setFullscreen(canvas);
    draw(context);
}

function draw(context) {
    const radius = window.innerWidth * 0.15;
    const nrOfDots = 8;
    const multiplier = 2;

    drawCircle(context, radius);
    const dots = drawDotsOnCircle(context, radius, nrOfDots);
    drawLinesBetweenDots(context, multiplier, dots);
}

/**
 * Ritar ut en cirkel på skärmen
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} radius 
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
 * @returns {Array<any>} the positions of all the dots
 */
function drawDotsOnCircle(context, radius, nrOfDots) {
    context.fillStyle = 'red';
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const dotRadius = radius / 100;

    // Formler baserat på "Enhetscirkeln"
    // radius * cos(angle) = x
    // radius * sin(angle) = y

    const dots = [];

    for (let i = 0; i < nrOfDots; i++) {
        const angle = Math.PI * 2 / nrOfDots * i;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        dots.push({ x, y });
        
        context.beginPath();
        context.arc(x, y, dotRadius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }
    
    return dots;
}

/**
 * Ritar linjer mellan punkerna
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} multiplier
 * @param {Array<any>} dots
 */
function drawLinesBetweenDots(context, multiplier, dots) {
    context.strokeStyle = 'black';
    context.lineWidth = 2;

    context.beginPath();
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const nextIndex = (i * multiplier) % dots.length;
        const nextDot = dots[nextIndex];
        
        context.moveTo(dot.x, dot.y);
        context.lineTo(nextDot.x, nextDot.y);
    }
    context.stroke();
}


function setFullscreen(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}