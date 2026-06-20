import { ProjectPage } from "../layout/ProjectPage";

export default function EasyRoomie() {
  return (
    <ProjectPage
      title="EasyRoomie"
      className="bg-white w-full max-w-full h-auto"
      textEmphasisColor="text-[#87d3de]"
    >
      <div className="w-full max-w-5xl p-6 flex flex-col gap-2 items-start justify-center space-y-6 text-base text-gray-700 leading-relaxed pb-4 pt-0">
        <h2>Click <a className="text-darker-green! underline! underline-offset-4!" href="https://github.com/ca-Stella/EasyRoomie">here</a> to see the github repo!</h2>
        <p>
          EasyRoomie is a full-stack web application designed to simplify the
          housing search process for students by bringing landlords, tenants,
          and potential roommates together on a single platform. Rather than
          requiring users to navigate multiple websites and social media groups,
          EasyRoomie centralizes rental listings, roommate discovery, and
          profile management into one streamlined experience.
        </p>
        <p>
          As part of a team project, I helped develop a platform that supports
          two primary user roles: landlords and tenants. Landlords can create
          and manage rental listings, specify property details and lifestyle
          preferences, and receive recommendations for compatible tenants.
          Tenants can browse available housing, search for roommates, manage
          roommate requests, and view listings ranked according to their
          personal preferences and lifestyle compatibility.
        </p>
        <p>
          One of the key features of EasyRoomie is its recommendation system.
          The platform analyzes factors such as budget, location, lifestyle
          habits, housing preferences, and roommate expectations to generate
          personalized suggestions. These compatibility scores help tenants
          discover suitable roommates and assist landlords in identifying
          potential tenants who are a strong match for their listings.
        </p>

        <p>
          Through this project, I gained experience developing full-stack web
          applications, designing database-driven features, implementing user
          authentication and role-based workflows, and creating intuitive user
          experiences that address real-world challenges faced by students
          searching for housing.
        </p>
      </div>
    </ProjectPage>
  );
}
