using System;
using System.Collections.Generic;
 
namespace tictactoeGame
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Let's play Tic Tac Toe !\n");
            Console.WriteLine("Enter player one's name (X)");
            string Player1 = Console.ReadLine();
            Console.WriteLine("Enter player two's name(O)");
            string Player2 = Console.ReadLine();
            string emptySymbol = "   ";
            string symbolX = " X ";
            string symbolO = " O ";
            bool playingConditions = true;
            bool player1Turn = true;
            bool posXStrCheck;
            bool posYStrCheck;
            string currentPlayer = Player1;
 
            List<List<string>> symbols = new List<List<string>>()
            {
                new List<string>(){ emptySymbol, emptySymbol, emptySymbol},
                new List<string>(){ emptySymbol, emptySymbol, emptySymbol},
                new List<string>(){ emptySymbol, emptySymbol, emptySymbol }
            };
            do
            {
                Console.WriteLine("    0     1     2");
                Console.WriteLine(" 0 " + symbols[0][0] + " | " + symbols[0][1] + " | " + symbols[0][2] + " \n   ____|_____|____ \n 1 " + symbols[1][0] + " | " + symbols[1][1] + " | " + symbols[1][2] + " \n   ____|_____|____ \n 2 " + symbols[2][0] + " | " + symbols[2][1] + " | " + symbols[2][2] + " \n       |     |    \n");
 
                Console.WriteLine("It's " + currentPlayer + "'s turn.");
 
                int posX = 0;
                int posY = 0;
 
                do
                {
                    Console.WriteLine(currentPlayer + " Please enter a horizontal grid (0, 1, 2)");
                    string posXStr = Console.ReadLine();
                    posXStrCheck = int.TryParse(posXStr, out posX);
 
                    Console.WriteLine(currentPlayer + " please enter a vertical grid(0, 1, 2)");
                    string posYStr = Console.ReadLine();
                    posYStrCheck = int.TryParse(posYStr, out posY);
 
                } while (!posXStrCheck ||
                    !posYStrCheck ||
                    posX > 2 ||
                    posX < 0 ||
                    posY > 2 ||
                    posY < 0 ||
                    symbols[posX][posY] != emptySymbol);
 
 
 
                if (currentPlayer == Player1)
                {
                    symbols[posX][posY] = symbolX;
                }
                else
                {
                    symbols[posX][posY] = symbolO;
                }
 
                for (int i = 0; i < symbols.Count; i++)
                {
                    if (symbols[i][0] == symbols[i][1] && symbols[i][0] == symbols[i][2] && symbols[i][0] != emptySymbol || symbols[0][i] == symbols[1][i] && symbols[0][i] == symbols[2][i] && symbols[0][i] != emptySymbol)
                    {
                        playingConditions = false;
                        Console.WriteLine("The winner is " + currentPlayer);
                    }
                }
 
                if (symbols[0][0] == symbols[1][1] && symbols[0][0] == symbols[2][2] && symbols[0][0] != emptySymbol || symbols[0][2] == symbols[1][1] && symbols[0][2] == symbols[2][0] && symbols[0][2] != emptySymbol)
                {
                    Console.WriteLine("   " + symbols[0][0] + " | " + symbols[0][1] + " | " + symbols[0][2] + " \n   ____|_____|____ \n   " + symbols[1][0] + " | " + symbols[1][1] + " | " + symbols[1][2] + " \n   ____|_____|____ \n   " + symbols[2][0] + " | " + symbols[2][1] + " | " + symbols[2][2] + " \n       |     |    \n");
                    Console.WriteLine("The winner is " + currentPlayer);
                    playingConditions = false;
                }
                if (player1Turn)
                {
                    player1Turn = false;
                    currentPlayer = Player2;
                }
                else
                {
                    player1Turn = true;
                    currentPlayer = Player1;
                }
 
            } while (playingConditions);
        }
    }
}