import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/accordion";

const researchProblems = [
    [
        "Algorithms for Haplotype Inference and Analysis",
        <>
            <p>
                Phasing, Imputation, Assembly, GWAS, Diploid, Haploid,
                Metagenomics, Epigenomics, HIV patient metagenome.
            </p>
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
                Improving data quality is crucial, because if a human genome
                cannot be independently assembled then the sequence data cannot
                be sorted into the two sets of parental chromosomes, or
                haplotypes. This process haplotype phasing will become one of
                the most useful tools in genomic medicine. Establishing the
                complete set of genetic information that we received from each
                parent is crucial to understanding the links between
                heritability, gene function, regulatory sequences and our
                predisposition to disease.
                <br />
                <span className="flex justify-end">J. C. Venter</span>
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
            <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                "Multiple personal genomes await"
                <br />
                <span className="flex justify-end">Nature, April 2010</span>
            </blockquote>
        </>,
    ],
    [
        "The Regulatory Genome and the Computer",
        'The definitive feature of the many thousand cis-regulatory control modules in an animal genome is their information processing capability. In the "genomic computer" intra-machine communication occurs by means of diffusion (of transcription factors), while in electronic computers it occurs by electron transit along pre-organized wires. There follow fundamental differences in design principle in respect to the meaning of time, speed, multiplicity of processors, memory, robustness of computation and hardware and software. The genomic computer controls spatial gene expression in the development of the body plan, and its appearance in remote evolutionary time must be considered to have been a founding requirement for animal grade life.',
    ],
    [
        "Genomics and Disease: Genetic Heterogeneity and the Missing Heritability Problem",
        'The genetic architecture of a disorder, i.e., the number and frequency of susceptibility alleles, is shaped by evolution. The majority of variants detected by Genome-Wide Association Studies (GWAS) have no demonstrated biological significance. "The general failure to confirm common risk variants is not due to a failure to carry out GWAS properly. The problem is underlying biology, not the operationalization of study design. The common disease—common variant model has been the primary focus of human genomics over the last decade. .. If common alleles influenced common diseases, many would have been found by now. The issue is not how to develop still larger studies, or how to parse the data still further, but rather whether the common disease—common variant hypothesis has now been tested and found not to apply to most complex human diseases." Jon McClellan, and Mary-Claire King, "Genetic Heterogeneity in Human Disease" Cell, 2010',
    ],
    [
        "Protein Folding Algorithms",
        "The search for combinatorial algorithms for lattice protein folding that construct the lowest energy fold with mathematical guaranteed error bounds are illuminating the elusive structure of optimal folds. Although for almost every model, protein folding was proved NP-complete, the search for the optimal algorithm that would find the optimum fold on lattice proteins with real protein sequences from PDB is under way. A major unresolved problem is the protein energy function inference. We used methods from Economics and Political Science, namely, Voting Theory, to infer from individual preferences of amino acids in PDB protein structures, the social choice postulated by the thermodynamic hypothesis, namely the existence of a universal energy function ",
    ],
];

const ResearchAccordion = () => {
    return (
        <Accordion
            type="single"
            collapsible
            className="basis-full h-full border-2 rounded p-10 shadow"
            defaultValue={researchProblems[0][0]}
        >
            {researchProblems.map(([title, content]) => (
                <AccordionItem value={title}>
                    <AccordionTrigger className="flex gap-10 text-left">
                        {title}
                    </AccordionTrigger>
                    <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default ResearchAccordion;
