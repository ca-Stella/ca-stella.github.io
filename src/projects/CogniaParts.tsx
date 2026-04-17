import type { ProjectPart } from "./types";

export const parts: ProjectPart[] = [
  {
    content: (
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Discovery Phase</h2>
        <p className="text-gray-600 text-md">
          There is a lot of note-taking apps available for students, including Notability, GoodNotes, OneNote, and Notion. After talking to some students, the main idea central for Cognia Notes was found to be:
        </p>

        <ul className="list-disc pl-5 text-sm text-gray-500">
          <li><span className="font-bold">Simplicity</span>: Students want an app that is easy to use, allowing them to focus on taking notes rather than choosing between all the possible options and settings! </li>
          <li><span className="font-bold">Convenience</span>: A simple UI that is intuitive and easy to navigate help students stay focused while taking notes! </li>
          <li><span className="font-bold">Organization</span>: It's nice to have the flexibility to choose how to organize our notes - whether it's based on subject, date, or type! </li>
        </ul>
      </div>
    )
  },

  {
    content: (
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Essential Features</h2>
        <p className="text-gray-600 text-md">
          The main core essential features for Cognia Notes are:
        </p>

        <ul className="list-disc pl-5 text-sm text-gray-500">
          <li><span className="font-bold">Note-taking</span>: Add a note, and write by typing and/or handwriting! </li>
        <li><span className="font-bold">Detailed actions</span>: Write using pen, type using keyboard, erase using eraser. </li>

          <li><span className="font-bold">Options</span>: Option to choose the colour of the writing and the background paper. </li>
          <li><span className="font-bold">Organize notes</span>: Organize notes into directory-like format that allows for notes to be easily accessed. Allow notes to be deleted and copied. </li>
          <li><span className="font-bold">Import files</span>: Import notes (.pdf) so that users can write on them directly.</li>
        </ul>
        <p className="text-gray-600 text-md">
          Some "nice-to-have" features are:
        </p>

        <ul className="list-disc pl-5 text-sm text-gray-500">
          <li><span className="font-bold">Export notes</span>: as .pdf or .png files. </li>
          <li><span className="font-bold">Undo</span>: Undo previous action. </li>
          <li><span className="font-bold">Integrate screenshots</span>: Add screenshots or file elements to the notes directly! </li>
          <li><span className="font-bold">Voice recordings</span>: Record voice recordings directly into one file with the notes.</li>
        </ul>
      </div>
    )
  }
];