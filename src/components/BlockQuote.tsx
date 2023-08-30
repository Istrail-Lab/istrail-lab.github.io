const BlockQuote = ({
    author: string,
}: React.PropsWithChildren<{ author: string }>) => (
    <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 relative isolate">
        <svg
            className="w-8 h-8 text-gray-400/50 mb-4 rotate-180 absolute -z-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
        >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        Improving data quality is crucial, because if a human genome cannot be
        independently assembled then the sequence data cannot be sorted into the
        two sets of parental chromosomes, or haplotypes. This process haplotype
        phasing will become one of the most useful tools in genomic medicine.
        Establishing the complete set of genetic information that we received
        from each parent is crucial to understanding the links between
        heritability, gene function, regulatory sequences and our predisposition
        to disease.
        <br />
        <span className="flex justify-end">{author}</span>
        <svg
            className="w-8 h-8 text-gray-400/50 mb-4 absolute -z-10 bottom-0 right-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
        >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
    </blockquote>
);
