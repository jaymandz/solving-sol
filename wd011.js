/*
 * Wall Drawing #11 (1969)
 * 
 * A wall divided horizontally and vertically into four equal parts. Within
 * each part, three of the four kinds of lines are superimposed.
 */

const CANVAS_SIZE = 600
const INC_SIZE = 10
// Should be a factor of CANVAS_SIZE (and CANVAS_SIZE / 2) for best results

function setup()
{
    createCanvas(CANVAS_SIZE, CANVAS_SIZE)
    background('beige') // Because pure white is too boring
}

function draw()
{
    for (var v = 0; v <= CANVAS_SIZE; v += INC_SIZE)
    {
        line(v, 0, v, CANVAS_SIZE)
    }
    for (var h = 0; h <= CANVAS_SIZE; h += INC_SIZE)
    {
        line(0, h, CANVAS_SIZE, h)
    }

    for (var q1 = 0; q1 <= CANVAS_SIZE / 2; q1 += INC_SIZE)
    {
        line(0, q1, q1, 0)
    }
    for (var q1 = 0; q1 <= CANVAS_SIZE / 2; q1 += INC_SIZE)
    {
        line(CANVAS_SIZE / 2, q1, q1, CANVAS_SIZE / 2)
    }

    for (var q2 = CANVAS_SIZE / 2; q2 <= CANVAS_SIZE; q2 += INC_SIZE)
    {
        line(q2, 0, CANVAS_SIZE, CANVAS_SIZE - q2)
    }
    for (var q2 = 0; q2 <= CANVAS_SIZE / 2; q2 += INC_SIZE)
    {
        line(CANVAS_SIZE / 2, q2, CANVAS_SIZE - q2, CANVAS_SIZE / 2)
    }

    for (var q3 = 0; q3 <= CANVAS_SIZE / 2; q3 += INC_SIZE)
    {
        line(q3, CANVAS_SIZE / 2, CANVAS_SIZE / 2, CANVAS_SIZE - q3)
    }
    for (var q3 = CANVAS_SIZE / 2; q3 <= CANVAS_SIZE; q3 += INC_SIZE)
    {
        line(0, q3, CANVAS_SIZE - q3, CANVAS_SIZE)
    }

    for (var q4 = CANVAS_SIZE / 2; q4 <= CANVAS_SIZE; q4 += INC_SIZE)
    {
        line(CANVAS_SIZE / 2, q4, q4, CANVAS_SIZE / 2)
    }
    for (var q4 = CANVAS_SIZE / 2; q4 <= CANVAS_SIZE; q4 += INC_SIZE)
    {
        line(q4, CANVAS_SIZE, CANVAS_SIZE, q4)
    }
}
