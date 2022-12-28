namespace FunFactor.Client.Models.Game
{
    public class GamePiece
    {
        public Position Position { get; set; } = new Position();
        public int Value { get; set; }
        public bool IsSelected { get; set; }

    }
}
