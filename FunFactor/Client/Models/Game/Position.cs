namespace FunFactor.Client.Models.Game
{
    public class Position
    {
        public int X { get; set; }
        public int Y { get; set; }


        public bool Matches(Position target)
        {
            return X == target.X && Y == target.Y;
        }
    }
}
