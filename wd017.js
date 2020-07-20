/*
 * Wall Drawing #17 (1969)
 *
 * Four-part drawing with a different line direction in each part.
 */

function setup()
{
    createCanvas(600, 600)
}

function draw()
{
    // Right diagonal lines
    for (var r = 0; r <= 300; r += 6)
    {
        line(r, 0, 0, r)
    }

    // Left diagonal lines, starting along the x-axis
    for (var lx1_ctr = 0; lx1_ctr <= 600; lx1_ctr += 7)
    {
        var lx1 = lx1_ctr
        var ly1 = 0

        var lx2 = lx1_ctr + (600 - lx1_ctr) / 2
        var ly2 = (600 - lx1_ctr) / 2

        if (lx1 < 300)
        {
            lx1 = 150 + (lx1_ctr / 2)
            ly1 = 150 - (lx1_ctr / 2)
        }

        line(lx1, ly1, lx2, ly2)
    }

    // Left diagonal lines, starting along the y-axis
    for (var ly1_ctr = 0; ly1_ctr <= 600; ly1_ctr += 7)
    {
        var lx1 = 0
        var ly1 = ly1_ctr

        var lx2 = (600 - ly1_ctr) / 2
        var ly2 = ly1_ctr + (600 - ly1_ctr) / 2

        if (ly1 < 300)
        {
            lx1 = 150 - (ly1_ctr / 2)
            ly1 = 150 + (ly1_ctr / 2)
        }

        line(lx1, ly1, lx2, ly2)
    }

    // Vertical lines
    for (var lx1_ctr = 0; lx1_ctr <= 600; lx1_ctr += 5)
    {
        var ly1 = 600 - lx1_ctr
        var ly2 = 600

        if (lx1_ctr > 300)
        {
            ly2 -= lx1_ctr - 300
        }

        line(lx1_ctr, ly1, lx1_ctr, ly2)
    }

    // Horizontal lines
    for (var ly1_ctr = 300; ly1_ctr <= 600; ly1_ctr += 5)
    {
        var lx1 = 900 - ly1_ctr
        line(lx1, ly1_ctr, 600, ly1_ctr)
    }
}
