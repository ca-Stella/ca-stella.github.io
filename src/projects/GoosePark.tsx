import { ProjectPage } from "../layout/ProjectPage";
import GooseParkTitle from "../assets/projectImages/g_title.png"
import GooseParkTTT from "../assets/projectImages/g_tictactoe.png"
import GooseParkUI from "../assets/projectImages/g_gamechoice.png"

export default function GoosePark() {
  return (
    <ProjectPage
      title="Goose Park"
      className="bg-white w-full max-w-full h-auto"
      textEmphasisColor="text-[#87d3de]"
    >
      <div className="w-full max-w-5xl p-6 flex flex-col gap-2 items-start justify-center space-y-6 text-base text-gray-700 leading-relaxed pb-4 pt-0">
        <img src={GooseParkTitle} className="mx-auto" width="70%" height="auto" alt="Goose Park Title Page" />
        <p>
          Goose Park is an Online Multiplayer Board Game Platform (OmG). Join us with your friends and play engaging and fun games with one another! Chat while playing with other geese, who you can either challenge or meet in the park by joining the queue. Compare your stats with other geese using the leaderboard, and personalize your avatar and your profile!
        </p>
        <img src={GooseParkUI} className="mx-auto" width="70%" height="auto" alt="Goose Park Game Select Page" />

        <p>
          Goose Park currently supports three games: Tic-tac-toe, Connect 4, and Chess. Of those games, I took part in designing and developing tic-tac-toe. Our tic-tac-toe game takes the traditional tic-tac-toe to another level! Made up of nine tic-tac-toe boards in a 3 x 3 grid, take turns placing pieces onto the smaller tic-tac-toe boards. Players can make a move on a board in the 9x9 board to make the opponent play on the tic-tac-toe board at that position. Winning on one board swaps that board with a random board, and the player who marks a horizontal, vertical, or diagonal line with their respective symbol wins!
        </p>
        <img src={GooseParkTTT} className="mx-auto" width="60%" height="auto" alt="Goose Park Tic-tac-toe" />

      </div>
    </ProjectPage>
  );
}
