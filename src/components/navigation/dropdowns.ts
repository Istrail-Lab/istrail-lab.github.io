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
                "3D Ising Model and Statistical Mechanics": "",
            },
            Biology: {
                "Protein Folding": "",
                "Gene Regulatory Networks": "",
                "SNPs and Haplotypes": "",
            },
            "Computer Science": {
                "Universal Traversal Sequence": "",
                "Bisimulation and Semantics of Concurrent Programs": "",
                "Chomsky Grammars and Formal Languages": "",
                "Graph Theory and Book Embeddings": "",
            },
            "Number Theory": {
                "Context-Free Characterization of Algebraic Numbers": "",
            },
            Economics: {
                "An Arrow Impossibility Theorem for Protein Folding": "",
            },
        },
    },
    {
        dropdownName: "Lectures",
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
        dropdownName: "Sorin's Essays",
        dropdownItems: {
            "John von Neumann's Axioms": "",
            "Edger Dijkstra's Axioms": "",
            "Eric Davidson's Axioms": "",
            "Mike Waterman's Axioms": "",
            "Solomon Marcus' Axioms": "",
        },
    },
    {
        dropdownName: "Sorin's Games",
        dropdownItems: {
            "Computer Science Through Urn Games": "",
            "The 3-Einstein": "",
            "Father-In-Law vs Pajamas": "",
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
