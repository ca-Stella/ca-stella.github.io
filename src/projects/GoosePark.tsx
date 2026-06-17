import { ProjectPage } from "../layout/ProjectPage";

export default function GoosePark() {
  return (
    <ProjectPage
      title="Goose Park"
      className="bg-white w-full max-w-full h-auto"
      textEmphasisColor="text-[#87d3de]"
    >
      <div className="w-full max-w-5xl p-6 flex flex-col gap-5 items-start justify-center space-y-6 text-base text-gray-700 leading-relaxed pb-16">
        <p>
          Goose Park is an Online Multiplayer Board Game Platform (OmG). Join us with your friends and play engaging and fun games with one another! Chat while playing with other geese, who you can either challenge or meet in the park by joining the queue. Compare your stats with other geese using the leaderboard, and personalize your avatar and your profile!
        </p>
        
        <p>
          Our OmG platform currently supports three games: Tic-tac-toe, Connect 4, and Chess. Of those games, I took part in designing and developing tic-tac-toe. Our tic-tac-toe game takes the traditional tic-tac-toe to another level! Made up of nine tic-tac-toe boards in a 3 x 3 grid, take turns placing pieces onto the smaller tic-tac-toe boards. Players can make a move on a board in the 9x9 board to make the opponent play on the tic-tac-toe board at that position. Winning on one board swaps that board with a random board, and the player who marks a horizontal, vertical, or diagonal line with their respective symbol wins!
        </p>
      </div>
    </ProjectPage>
  );
}
