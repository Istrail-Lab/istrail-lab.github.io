import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/accordion";
import BlockQuote from "./BlockQuote";

const researchProblems = [
    [
        "Haplotype Inference and Analysis",
        <>
            <p>
                Phasing, Imputation, Assembly, GWAS, Diploid, Haploid,
                Metagenomics, Epigenomics, HIV patient metagenome.
            </p>
            <BlockQuote author="J. C. Venter" journal="Nature, 2010">
                Improving data quality is crucial, because if a human genome
                cannot be independently assembled then the sequence data cannot
                be sorted into the two sets of parental chromosomes, or
                haplotypes. This process haplotype phasing will become one of
                the most useful tools in genomic medicine. Establishing the
                complete set of genetic information that we received from each
                parent is crucial to understanding the links between
                heritability, gene function, regulatory sequences and our
                predisposition to disease.
            </BlockQuote>
            <BlockQuote author="J. C. Venter" journal="Nature, 2010">
                Multiple personal genomes await.
            </BlockQuote>
        </>,
    ],
    [
        "The Regulatory Genome and the Computer",
        <>
            <p>
                The definitive feature of the many thousand cis-regulatory
                control modules in an animal genome is their information
                processing capability. In the "genomic computer" intra-machine
                communication occurs by means of diffusion (of transcription
                factors), while in electronic computers it occurs by electron
                transit along pre-organized wires. There follow fundamental
                differences in design principle in respect to the meaning of
                time, speed, multiplicity of processors, memory, robustness of
                computation and hardware and software. The genomic computer
                controls spatial gene expression in the development of the body
                plan, and its appearance in remote evolutionary time must be
                considered to have been a founding requirement for animal grade
                life.
            </p>
        </>,
    ],
    [
        "Genetic Heterogeneity and the Missing Heritability Problem",
        <>
            <p>
                The genetic architecture of a disorder, i.e., the number and
                frequency of susceptibility alleles, is shaped by evolution. The
                majority of variants detected by Genome-Wide Association Studies
                (GWAS) have no demonstrated biological significance.
            </p>
            <BlockQuote
                author="Jon McClellan and Mary-Claire King"
                journal="Cell, 2010"
            >
                The general failure to confirm common risk variants is not due
                to a failure to carry out GWAS properly. The problem is
                underlying biology, not the operationalization of study design.
                The common disease—common variant model has been the primary
                focus of human genomics over the last decade,..., if common
                alleles influenced common diseases, many would have been found
                by now. The issue is not how to develop still larger studies, or
                how to parse the data still further, but rather whether the
                common disease—common variant hypothesis has now been tested and
                found not to apply to most complex human diseases.
            </BlockQuote>
        </>,
    ],
    [
        "Protein Folding Algorithms",
        <>
            <p>
                The search for combinatorial algorithms for lattice protein
                folding that construct the lowest energy fold with mathematical
                guaranteed error bounds are illuminating the elusive structure
                of optimal folds. Although for almost every model, protein
                folding was proved NP-complete, the search for the optimal
                algorithm that would find the optimum fold on lattice proteins
                with real protein sequences from PDB is under way. A major
                unresolved problem is the protein energy function inference. We
                used methods from Economics and Political Science, namely,
                Voting Theory, to infer from individual preferences of amino
                acids in PDB protein structures, the social choice postulated by
                the thermodynamic hypothesis, namely the existence of a
                universal energy function.
            </p>
        </>,
    ],
] as const;

const ResearchAccordion = () => {
    return (
        <Accordion
            type="single"
            collapsible
            className="basis-full h-full border-2 border-gray-400/50 rounded p-10 shadow"
            defaultValue={researchProblems[0][0]}
        >
            {researchProblems.map(([title, content]) => (
                <AccordionItem
                    className="px-4 border-b-2 border-b-gray-400/50"
                    style={{ textWrap: "balance" } as React.CSSProperties}
                    value={title}
                    key={title}
                >
                    <AccordionTrigger className="flex gap-10 text-left font-bold">
                        {title}
                    </AccordionTrigger>
                    <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default ResearchAccordion;
