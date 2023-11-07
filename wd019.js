/*
 * Wall Drawing #19 (1969)
 *
 * A wall divided vertically into six equal parts, with two of the four
 * kinds of line directions superimposed in each part.
 */

const SPACE = 6
const SECTION_WIDTH = SPACE * 20

const CANVAS_SIZE = SECTION_WIDTH * 6

function setup()
{
    createCanvas(CANVAS_SIZE, CANVAS_SIZE)
    background('beige')
}

function draw()
{
    // First section
    for (var v = 0; v <= SECTION_WIDTH; v += SPACE)
    {
        line(v, 0, v, CANVAS_SIZE)
    }

    for (var st = 0; st <= SECTION_WIDTH; st += SPACE)
    {
        line(st, 0, SECTION_WIDTH, SECTION_WIDTH - st)
    }
    for (var sm = 0; sm <= CANVAS_SIZE - SECTION_WIDTH; sm += SPACE)
    {
        line(0, sm, SECTION_WIDTH, SECTION_WIDTH + sm)
    }
    for (var sb = 0; sb <= SECTION_WIDTH; sb += SPACE)
    {
        line(0, SECTION_WIDTH * 5 + sb, SECTION_WIDTH - sb, CANVAS_SIZE)
    }

    // Second section
    for (var v = SECTION_WIDTH; v <= SECTION_WIDTH * 2; v += SPACE)
    {
        line(v, 0, v, CANVAS_SIZE)
    }

    for (var st = 0; st <= SECTION_WIDTH; st += SPACE)
    {
        line(SECTION_WIDTH, st, SECTION_WIDTH + st, 0)
    }
    for (var sm = SECTION_WIDTH; sm <= CANVAS_SIZE; sm += SPACE)
    {
        line(SECTION_WIDTH, sm, SECTION_WIDTH * 2, sm - SECTION_WIDTH)
    }
    for (var sb = SECTION_WIDTH; sb <= SECTION_WIDTH * 2; sb += SPACE)
    {
        line(sb, CANVAS_SIZE, SECTION_WIDTH * 2, SECTION_WIDTH * 4 + sb)
    }

    // Third section
    for (var h = 0; h <= CANVAS_SIZE; h += SPACE)
    {
        line(SECTION_WIDTH * 2, h, SECTION_WIDTH * 3, h)
    }

    for (var st = SECTION_WIDTH * 2; st <= SECTION_WIDTH * 3; st += SPACE)
    {
        line(st, 0, SECTION_WIDTH * 3, SECTION_WIDTH * 3 - st)
    }
    for (var sm = 0; sm <= CANVAS_SIZE - SECTION_WIDTH; sm += SPACE) line(
        SECTION_WIDTH * 2,
        sm,
        SECTION_WIDTH * 3,
        SECTION_WIDTH + sm
    )
    for (var sb = 0; sb <= SECTION_WIDTH; sb += SPACE) line(
        SECTION_WIDTH * 2,
        SECTION_WIDTH * 5 + sb,
        SECTION_WIDTH * 3 - sb,
        CANVAS_SIZE
    )

    // Fourth section
    for (var h = 0; h <= CANVAS_SIZE; h += SPACE)
    {
        line(SECTION_WIDTH * 3, h, SECTION_WIDTH * 4, h)
    }

    for (var st = SECTION_WIDTH * 3; st <= SECTION_WIDTH * 4; st += SPACE)
    {
        line(SECTION_WIDTH * 3, st - SECTION_WIDTH * 3, st, 0)
    }
    for (var sm = SECTION_WIDTH; sm <= CANVAS_SIZE; sm += SPACE)
    {
        line(SECTION_WIDTH * 3, sm, SECTION_WIDTH * 4, sm - SECTION_WIDTH)
    }
    for (var sb = SECTION_WIDTH * 3; sb <= SECTION_WIDTH * 4; sb += SPACE)
    {
        line(sb, CANVAS_SIZE, SECTION_WIDTH * 4, SECTION_WIDTH * 2 + sb)
    }

    // Fifth section
    for (var v = SECTION_WIDTH * 4; v <= SECTION_WIDTH * 5; v += SPACE)
    {
        line(v, 0, v, CANVAS_SIZE)
    }

    for (var h = 0; h <= CANVAS_SIZE; h += SPACE)
    {
        line(SECTION_WIDTH * 4, h, SECTION_WIDTH * 5, h)
    }

    // Sixth section
    for (var s1t = SECTION_WIDTH * 5; s1t <= CANVAS_SIZE; s1t += SPACE)
    {
        line(s1t, 0, CANVAS_SIZE, CANVAS_SIZE - s1t)
    }
    for (var s1m = 0; s1m <= CANVAS_SIZE - SECTION_WIDTH; s1m += SPACE)
    {
        line(SECTION_WIDTH * 5, s1m, CANVAS_SIZE, SECTION_WIDTH + s1m)
    }
    for (var s1b = 0; s1b <= CANVAS_SIZE; s1b += SPACE) line(
        SECTION_WIDTH * 5,
        SECTION_WIDTH * 5 + s1b,
        CANVAS_SIZE - s1b,
        CANVAS_SIZE
    )

    for (var s2t = 0; s2t <= SECTION_WIDTH; s2t += SPACE)
    {
        line(SECTION_WIDTH * 5, s2t, SECTION_WIDTH * 5 + s2t, 0)
    }
    for (var s2m = SECTION_WIDTH; s2m <= CANVAS_SIZE; s2m += SPACE)
    {
        line(SECTION_WIDTH * 5, s2m, CANVAS_SIZE, s2m - SECTION_WIDTH)
    }
    for (var s2b = SECTION_WIDTH * 5; s2b <= CANVAS_SIZE; s2b += SPACE)
    {
        line(s2b, CANVAS_SIZE, CANVAS_SIZE, s2b)
    }
}

