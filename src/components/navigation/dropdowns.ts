interface Dropdown {
    dropdownName: string;
    dropdownItems:
        | Record<string, string>
        | Record<string, Record<string, string>>;
}

export const dropdowns: Dropdown[] = [
    {
        dropdownName: "Research",
        dropdownItems: {
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
        },
    },
    {
        dropdownName: "Games",
        dropdownItems: {
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
        },
    },
    {
        dropdownName: "Distinguished Lecture Series",
        dropdownItems: {
            "John von Neumann Lectures": {
                "Brown University Symposium 2015": "/lectures/von-neumann-2015",
                "Brown University Symposium 2010": "",
                "Donald Knuth at Brown": "",
            },
            "Solomon Marcus Lectures": {
                "Lectures 1 - 8": "",
                "Lectures 1 - 4": "",
            },
        },
    },
    {
        dropdownName: "Memoriam",
        dropdownItems: {
            "Paul Erdos": "",
            "Edger Dijkstra": "",
            "Alan Cobham": "",
            "John Conway": "",
            "Eric Davidson": "",
            "Julie Nguyen Brown": "",
            "Freeman Dyson": "",
            "Ken Arrow": "",
        },
    },
];
