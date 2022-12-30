#include <stdio.h>
#include <stdlib.h>
#include <graphics.h>
#include <math.h>
#include <unistd.h>

// set layout for game at start
void layout()
{
    settextstyle(10, 0, 6);

    int w = textwidth("Tic Tac Toe");
    outtextxy((400 - w) / 2, 100, "Tic Tac Toe");

    // tic-tac-toe grid
    line(160, 220, 160, 460);
    line(160 + 1, 220, 160 + 1, 460);
    line(160 - 1, 220, 160 - 1, 460);

    line(80, 300, 320, 300);
    line(80, 300 + 1, 320, 300 + 1);
    line(80, 300 - 1, 320, 300 - 1);

    line(80, 380, 320, 380);
    line(80, 380 + 1, 320, 380 + 1);
    line(80, 380 - 1, 320, 380 - 1);

    line(240, 220, 240, 460);
    line(240 + 1, 220, 240 + 1, 460);
    line(240 - 1, 220, 240 - 1, 460);

    settextstyle(10, 0, 2);
    int h = textheight("~ By Group-4");
    w = textwidth("~ By Group-4");
    outtextxy(390 - w - 5, 590 - h, "~ By Group-4");
}

// DDA Function for line generation
void drawLine(int X0, int Y0, int X1, int Y1)
{
    // calculate dx & dy
    int dx = X1 - X0;
    int dy = Y1 - Y0;

    // calculate steps required for generating pixels
    int steps = abs(dx) > abs(dy) ? abs(dx) : abs(dy);

    // calculate increment in x & y for each steps
    float Xinc = dx / (float)steps;
    float Yinc = dy / (float)steps;

    // Put pixel for each step
    float X = X0;
    float Y = Y0;
    for (int i = 0; i <= steps; i++)
    {
        putpixel(round(X), round(Y), WHITE); // put pixel at (X,Y)

        X += Xinc; // increment in x at each step
        Y += Yinc; // increment in y at each step

        usleep(1);
    }
}

// set 'O' or 'X' in given position
void setOX(int turn, int p)
{
    settextstyle(10, 0, 6);
    int w = 0, h = 0;
    if (turn == 1)
    {
        h = textheight("X");
        w = textwidth("X");
    }
    else
    {
        h = textheight("O");
        w = textwidth("O");
    }
    int x = (80 - w) / 2;
    int y = (80 - h) / 2;
    switch (p)
    {
    case 1:
        if (turn == 1)
        {
            setcolor(RED);
            outtextxy(x + 80, y + 220, "X");
        }
        else
        {
            setcolor(GREEN);
            outtextxy(x + 80, y + 220, "O");
        }

        break;
    case 2:
        if (turn == 1)
        {
            setcolor(RED);
            outtextxy(x + 160, y + 220, "X");
        }
        else
        {
            setcolor(GREEN);
            outtextxy(x + 160, y + 220, "O");
        }

        break;
    case 3:
        if (turn == 1)
        {
            setcolor(RED);
            outtextxy(x + 240, y + 220, "X");
        }
        else
        {
            setcolor(GREEN);
            outtextxy(x + 240, y + 220, "O");
        }

        break;
    case 4:
        if (turn == 1)
        {
            setcolor(RED);
            outtextxy(x + 80, y + 300, "X");
        }
        else
        {
            setcolor(GREEN);
            outtextxy(x + 80, y + 300, "O");
        }

        break;
    case 5:
        if (turn == 1)
        {
            setcolor(RED);
            outtextxy(x + 160, y + 300, "X");
        }
        else
        {
            setcolor(GREEN);
            outtextxy(x + 160, y + 300, "O");
        }

        break;
    case 6:
        if (turn == 1)
        {
            setcolor(RED);
            outtextxy(x + 240, y + 300, "X");
        }
        else
        {
            setcolor(GREEN);
            outtextxy(x + 240, y + 300, "O");
        }

        break;
    case 7:
        if (turn == 1)
        {
            setcolor(RED);
            outtextxy(x + 80, y + 380, "X");
        }
        else
        {
            setcolor(GREEN);
            outtextxy(x + 80, y + 380, "O");
        }

        break;
    case 8:
        if (turn == 1)
        {
            setcolor(RED);
            outtextxy(x + 160, y + 380, "X");
        }
        else
        {
            setcolor(GREEN);
            outtextxy(x + 160, y + 380, "O");
        }

        break;
    case 9:
        if (turn == 1)
        {
            setcolor(RED);
            outtextxy(x + 240, y + 380, "X");
        }
        else
        {
            setcolor(GREEN);
            outtextxy(x + 240, y + 380, "O");
        }

        break;
    }
}

// check for winning conditions in given array
int checkWinner(char *a)
{
    // diagonal check
    if ((a[0] == a[4] && a[0] == a[8] && a[0] == 'X'))
    {
        drawLine(100, 240, 300, 440);
        return 1;
    }
    else if ((a[2] == a[4] && a[2] == a[6] && a[2] == 'X'))
    {
        drawLine(300, 240, 100, 440);
        return 1;
    }
    else if ((a[0] == a[4] && a[0] == a[8] && a[0] == 'O'))
    {
        drawLine(100, 240, 300, 440);
        return 2;
    }
    else if ((a[2] == a[4] && a[2] == a[6] && a[2] == 'O'))
    {
        drawLine(300, 240, 100, 440);
        return 2;
    }

    // horizontal check
    if ((a[0] == a[1] && a[1] == a[2] && a[0] == 'X'))
    {
        drawLine(100, 260, 300, 260);
        return 1;
    }
    else if (a[3] == a[4] && a[4] == a[5] && a[3] == 'X')
    {
        drawLine(100, 340, 300, 340);
        return 1;
    }
    else if (a[6] == a[7] && a[7] == a[8] && a[6] == 'X')
    {
        drawLine(100, 420, 300, 420);
        return 1;
    }

    else if ((a[0] == a[1] && a[1] == a[2] && a[0] == 'O'))
    {
        drawLine(100, 260, 300, 260);
        return 2;
    }
    else if (a[3] == a[4] && a[4] == a[5] && a[3] == 'O')
    {
        drawLine(100, 340, 300, 340);
        return 2;
    }
    else if (a[6] == a[7] && a[7] == a[8] && a[6] == 'O')
    {
        drawLine(100, 420, 300, 420);
        return 2;
    }

    // vertical check
    if (a[0] == a[3] && a[3] == a[6] && a[0] == 'X')
    {
        drawLine(120, 240, 120, 440);
        return 1;
    }
    else if (a[1] == a[4] && a[4] == a[7] && a[1] == 'X')
    {
        drawLine(200, 240, 200, 440);
        return 1;
    }
    else if (a[2] == a[5] && a[5] == a[8] && a[2] == 'X')
    {
        drawLine(280, 240, 280, 440);
        return 1;
    }

    else if (a[0] == a[3] && a[3] == a[6] && a[0] == 'O')
    {
        drawLine(120, 240, 120, 440);
        return 2;
    }
    else if (a[1] == a[4] && a[4] == a[7] && a[1] == 'O')
    {
        drawLine(200, 240, 200, 440);
        return 2;
    }
    else if (a[2] == a[5] && a[5] == a[8] && a[2] == 'O')
    {
        drawLine(280, 240, 280, 440);
        return 2;
    }

    return 0;
}

int main()
{
    // Tic Tac Toe
    initwindow(400, 600, "Tic Tac Toe");

    // set layout
    layout();

    // for mouse pointer
    POINT pos;

    int x = 0;
    int turn = 0;

    // an array for o'x and x's
    char b[9] = {0};

    // initialize array with 0's
    for (int i = 0; i < 9; i++)
    {
        b[i] = 0;
    }
    settextstyle(10, 0, 3);

    setcolor(GREEN);
    int w = textwidth("O's Turn !!");
    outtextxy((400 - w) / 2, 520, "O's Turn !!");

    while (x == 0 && turn <= 9)
    {
        if (GetAsyncKeyState(VK_LBUTTON))
        {
            // get the current postion of mouse pointer
            GetCursorPos(&pos);

            // X position of mouse
            long X = mousex();

            // Y position of mouse
            long Y = mousey();

            int mov = 0;

            // player O's turn
            if (turn % 2 == 0)
            {
                if (X > 80 && X < 160 && Y > 220 && Y < 300 && b[0] == 0) // b1
                {
                    setOX(0, 1);
                    mov = 1;
                    b[0] = 'O';
                }
                else if (X > 160 && X < 240 && Y > 220 && Y < 300 && b[1] == 0) // b2
                {
                    setOX(0, 2);
                    mov = 1;
                    b[1] = 'O';
                }
                else if (X > 240 && X < 320 && Y > 220 && Y < 300 && b[2] == 0) // b3
                {
                    setOX(0, 3);
                    mov = 1;
                    b[2] = 'O';
                }
                else if (X > 80 && X < 160 && Y > 300 && Y < 380 && b[3] == 0) // b4
                {
                    setOX(0, 4);
                    mov = 1;
                    b[3] = 'O';
                }
                else if (X > 160 && X < 240 && Y > 300 && Y < 380 && b[4] == 0) // b5
                {
                    setOX(0, 5);
                    mov = 1;
                    b[4] = 'O';
                }
                else if (X > 240 && X < 320 && Y > 300 && Y < 380 && b[5] == 0) // b6
                {
                    setOX(0, 6);
                    mov = 1;
                    b[5] = 'O';
                }
                else if (X > 80 && X < 160 && Y > 380 && Y < 460 && b[6] == 0) // b7
                {
                    setOX(0, 7);
                    mov = 1;
                    b[6] = 'O';
                }
                else if (X > 160 && X < 240 && Y > 380 && Y < 460 && b[7] == 0) // b8
                {
                    setOX(0, 8);
                    mov = 1;
                    b[7] = 'O';
                }
                else if (X > 240 && X < 320 && Y > 380 && Y < 460 && b[8] == 0) // b9
                {
                    setOX(0, 9);
                    b[8] = 'O';
                    mov = 1;
                }
                if (mov)
                {
                    // next turn
                    turn++;

                    // check for winning conditions
                    x = checkWinner(b);

                    settextstyle(10, 0, 3);
                    setcolor(RED);
                    int w = textwidth("X's Turn !!");
                    outtextxy((400 - w) / 2, 520, "X's Turn !!");

                    delay(200);

                    if (x != 0 || turn == 9)
                        break;
                }
            }

            // player X's turn
            else
            {

                if (X > 80 && X < 160 && Y > 220 && Y < 300 && b[0] == 0) // b1
                {
                    setOX(1, 1);
                    mov = 1;
                    b[0] = 'X';
                }
                else if (X > 160 && X < 240 && Y > 220 && Y < 300 && b[1] == 0) // b2
                {
                    setOX(1, 2);
                    mov = 1;
                    b[1] = 'X';
                }
                else if (X > 240 && X < 320 && Y > 220 && Y < 300 && b[2] == 0) // b3
                {
                    setOX(1, 3);
                    mov = 1;
                    b[2] = 'X';
                }
                else if (X > 80 && X < 160 && Y > 300 && Y < 380 && b[3] == 0) // b4
                {
                    setOX(1, 4);
                    mov = 1;
                    b[3] = 'X';
                }
                else if (X > 160 && X < 240 && Y > 300 && Y < 380 && b[4] == 0) // b5
                {
                    setOX(1, 5);
                    mov = 1;
                    b[4] = 'X';
                }
                else if (X > 240 && X < 320 && Y > 300 && Y < 380 && b[5] == 0) // b6
                {
                    setOX(1, 6);
                    mov = 1;
                    b[5] = 'X';
                }
                else if (X > 80 && X < 160 && Y > 380 && Y < 460 && b[6] == 0) // b7
                {
                    setOX(1, 7);
                    mov = 1;
                    b[6] = 'X';
                }
                else if (X > 160 && X < 240 && Y > 380 && Y < 460 && b[7] == 0) // b8
                {
                    setOX(1, 8);
                    mov = 1;
                    b[7] = 'X';
                }
                else if (X > 240 && X < 320 && Y > 380 && Y < 460 && b[8] == 0) // b9
                {
                    setOX(1, 9);
                    b[8] = 'X';
                    mov = 1;
                }
                if (mov)
                {
                    // next turn
                    turn++;

                    // check for winning conditions
                    x = checkWinner(b);

                    settextstyle(10, 0, 3);
                    setcolor(GREEN);
                    int w = textwidth("O's Turn !!");
                    outtextxy((400 - w) / 2, 520, "O's Turn !!");

                    delay(200);

                    if (x != 0 || turn == 9)
                        break;
                }
            }
        }
    }

    // if check winner returns 1 --> X is winner
    if (x == 1)
    {
        settextstyle(10, 0, 3);
        setcolor(RED);
        int w = textwidth("Player X won!!");
        outtextxy((400 - w) / 2, 520, "Player X won!!");
    }

    // if check winner returns 2 --> O is winner
    else if (x == 2)
    {
        settextstyle(10, 0, 3);
        setcolor(GREEN);
        int w = textwidth("Player O win!!");
        outtextxy((400 - w) / 2, 520, "Player O won!!");
    }

    // if checkWinner returns 0 --> match Draw
    else if (x == 0)
    {
        settextstyle(10, 0, 3);
        setcolor(BLUE);
        int w = textwidth("Its a Draw !!");
        outtextxy((400 - w) / 2, 520, "Its a Draw !!");
    }

    getch();
    return 0;
}