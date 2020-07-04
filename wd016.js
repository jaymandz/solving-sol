/*
 * Wall Drawing # 16 (1969)
 *
 * Bands of lines 12 inches (30 cm) wide, in three directions (vertical,
 * horizontal, diagonal right) intersecting.
 */

function setup() {
    createCanvas(600, 600);
    strokeWeight(1);
}

function draw() {
    background(235, 200, 215);

    // Verticals
    for (var c = 0; c <= 120; c += 12)
    {
        stroke(0, 155 - c, 0);
        line(c + 430, 0, c + 430, 600);
    }

    // Right-diagonals
    for (var c = 0; c <= 120; c += 12)
    {
        stroke(0, 0, 155 - c);
        line(c + 50, 600, 600, c + 50);
    }

    // Horizontals
    for (var c = 0; c <= 120; c += 12)
    {
        stroke(155 - c, 0, 155 - c);
        line(0, c + 100, 600, c + 100);
    }
}
