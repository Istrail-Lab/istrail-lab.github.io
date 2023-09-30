import { Drawer, List, ListItemButton } from "@mui/material";
import { useState } from "react";
import { Dropdown, DropdownWithSubheadings } from "./Dropdown";

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
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                    component="nav"
                >
                    <ListItemButton href="/sorin-istrail">
                        Sorin Istrail
                    </ListItemButton>
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
                                "Gene Regulatory Networks":
                                    "/research/regulatory-genome",
                                "SNPs and Haplotypes":
                                    "/research/snp-haplotypes",
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
                                "Graph Theory and Book Embeddings":
                                    "/research/graph-theory",
                            },
                        }}
                    />
                    <Dropdown
                        dropdownHeading="Games"
                        dropdownLinks={{
                            "Father-in-law vs Pajamas":
                                "/games/father-in-law-vs-pajamas",
                            'On Dijkstra\'s "Silly Game" With Balls in an Urn':
                                "/games/dijkstras-silly-game",
                            "A Chinese Math Olympiad Game":
                                "/games/chinese-math-olympiad",
                            "The Achilles-Turtoise-Riemann Game":
                                "/games/achilles-turtoise",
                            "How to Take a Random Walk Deterministically":
                                "/games/deterministic-random-walk",
                            "The Gold Bug: A Metaphor for Bioinformatics":
                                "/games/gold-bug",
                            "The Suffix Tree: A Billion Year Old Biological Innovation":
                                "/games/suffix-tree",
                        }}
                    />
                    <DropdownWithSubheadings
                        dropdownHeading="Brown Distinguished Lecture Series"
                        dropdownLinks={{
                            "John von Neumann Lectures": {
                                "Brown University Symposium 2015":
                                    "/lectures/von-neumann-2015",
                                "Brown University Symposium 2010":
                                    "/lectures/von-neumann-2010",
                                // "Donald Knuth at Brown": "",
                            },
                            "Solomon Marcus Lectures": {
                                "Lectures 1 - 8": "/lectures/solomon-marcus",
                            },
                        }}
                    />
                    <Dropdown
                        dropdownHeading="In Memoriam"
                        dropdownLinks={{
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
                            "Alberto Apostolico":
                                "/in-memoriam/alberto-apostolico",
                        }}
                    />
                    <ListItemButton href="/essays">Essays</ListItemButton>
                    <ListItemButton href="/publications">
                        Publications
                    </ListItemButton>
                    <ListItemButton href="/media-coverage">
                        Media
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
};

export default NavSidebar;
