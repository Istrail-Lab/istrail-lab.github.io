import { useState } from "react";
import { Dropdown, DropdownWithSubheadings } from "./Dropdown";
import { createUrl } from "../../config/site";

const NavSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="p-2 rounded-lg hover:bg-[#1F293733]"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      {open && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-lg">
            <div className="flex flex-col h-full overflow-y-auto">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 px-4 pb-4">

                <a
                  href={createUrl("/sorin-istrail")}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Sorin Istrail
                </a>
                <a
                  href={createUrl("/media-coverage")}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Media Coverage
                </a>
          <DropdownWithSubheadings
            dropdownHeading="Research"
            dropdownLinks={{
              "Statistical Physics": {
                "3D Ising Model and Statistical Mechanics":
                  "/research/ising-model",
              },
              Biology: {
                "Genome Assembly and Comparisons, Haplotype Assembly, and Transcriptome Assembly ":
                  "/research/assemblies",
                "Medical Bioinformatics and Genome-Wide Association Studies ":
                  "/research/bioinformatics-gwas",
                "Protein Folding": "/research/protein-folding",
                "Gene Regulatory Networks": "/research/regulatory-genome",
                "SNPs and Haplotypes": "/research/snp-haplotypes",
                "Viruses, Viral Genomics, and Immunopeptidomics":
                  "/research/viruses",
              },
              "Computer Science": {
                "Universal Traversal Sequence":
                  "/research/universal-traversing-sequence",
                "Bisimulation and Semantics of Concurrent Programs":
                  "/research/bisimulation",
                "Chomsky Grammars and Formal Languages":
                  "/research/formal-languages",
                "Graph Theory and Book Embeddings": "/research/graph-theory",
              },
            }}
          />
          <Dropdown
            dropdownHeading="Games"
            dropdownLinks={{
              "Father-in-law vs Pajamas": "/games/father-in-law-vs-pajamas",
              'On Dijkstra\'s "Silly Game" With Balls in an Urn':
                "/games/dijkstras-silly-game",
              "A Chinese Math Olympiad Game": "/games/chinese-math-olympiad",
              "The Achilles-Turtoise-Riemann Game": "/games/achilles-turtoise",
              "How to Take a Random Walk Deterministically":
                "/games/deterministic-random-walk",
              "The Gold Bug: A Metaphor for Bioinformatics": "/games/gold-bug",
              "The Suffix Tree: A Billion Year Old Biological Innovation":
                "/games/suffix-tree",
            }}
          />
          <DropdownWithSubheadings
            dropdownHeading="Brown Distinguished Lecture Series"
            dropdownLinks={{
              "John von Neumann Lectures": {
                "Brown University Symposium 2015": "/lectures/von-neumann-2015",
                "Brown University Symposium 2010": "/lectures/von-neumann-2010",
                // "Donald Knuth at Brown": "",
              },
              "Solomon Marcus Lectures": {
                "Lectures 1 - 8": "/lectures/solomon-marcus",
              },
              Youtube: {
                "Istrail Laboratory": "/lectures/youtube",
              },
            }}
          />
          <Dropdown
            dropdownHeading="In Memoriam"
            dropdownLinks={{
              "Leon Cooper": "/in-memoriam/leon-cooper",
              "Paul Erdos": "/in-memoriam/paul-erdos",
              // "Edger Dijkstra": "",
              // "Alan Cobham": "",
              "John Conway": "/in-memoriam/john-conway",
              "Eric Davidson": "/in-memoriam/eric-davidson",
              // "Julie Nguyen Brown": "",
              // "Freeman Dyson": "",
              "Ken Arrow": "/in-memoriam/ken-arrow",
              "Solomon Marcus": "/in-memoriam/solomon-marcus",
              "Sergiu Rudeanu": "/in-memoriam/sergiu-rudeanu",
              "Dragos Vaida": "/in-memoriam/dragos-vaida",
              "Alberto Apostolico": "/in-memoriam/alberto-apostolico",
            }}
          />
                <a
                  href={createUrl("/sorinfest")}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  SorinFest
                </a>
                <a
                  href={createUrl("/romania-celebrates-sorin")}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Romania Celebrates Sorin
                </a>
                <a
                  href={createUrl("/essays")}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Essays
                </a>
                <a
                  href={createUrl("/publications")}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Publications
                </a>
                <a
                  href={createUrl("/media-coverage")}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Media
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavSidebar;
