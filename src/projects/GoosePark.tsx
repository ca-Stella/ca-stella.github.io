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

        <img src={GooseParkTTT} className="mx-auto" width="60%" height="auto" alt="Goose Park Tic-tac-toe" />
        
        <p>
          Developed as part of a team project, Goose Park supports multiple games including Chess, Connect 4, and Tic-Tac-Toe. One of my primary contribution was the design and implementation of a unique multiplayer variation of Tic-Tac-Toe. Rather than using a traditional 3×3 board, the game consists of nine interconnected Tic-Tac-Toe boards arranged in a larger grid. Players' moves determine which board their opponent must play on next, introducing an additional layer of strategy and decision-making.
        </p>
        <p>
          To further differentiate the gameplay, winning a board causes it to be replaced by a randomly selected board, creating a dynamic game state that evolves throughout the match. Players must continuously adapt their strategies while attempting to secure a winning row, column, or diagonal across the larger board. Implementing these mechanics required careful game-state management, rule validation, and multiplayer synchronization to ensure a smooth and consistent experience for all players.
        </p>


        <img src={GooseParkUI} className="mx-auto" width="70%" height="auto" alt="Goose Park Game Select Page" />
        <p>
          In addition to developing game features, I designed and implemented the majority of the application's user interface using JavaFX, creating a cohesive experience across menus, matchmaking, profiles, leaderboards, and gameplay screens.
        </p>
        <p>
          Through this project, I gained experience working with Java, JavaFX, Maven, JUnit, and TestFX while collaborating within a larger development team. The project strengthened my skills in object-oriented design, game logic implementation, testing, and building interactive user experiences for multiplayer applications.        
        </p>

      </div>
    </ProjectPage>
  );
}
