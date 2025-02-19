import { Link } from "./QuickLinks";
import { createUrl } from "../config/site";

const HomeQuickLinks = () => {
    return (
        <aside className="xl:flex flex-col gap-4 py-20 fixed hidden left-[2%] w-44 z-10">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <Link href={createUrl("/research/ising-model")}>3D Ising Model</Link>
            <Link href={createUrl("/research/assemblies")}>Genome Assembly</Link>
            <Link href={createUrl("/research/protein-folding")}>Protein Folding</Link>
            <Link href={createUrl("/research/regulatory-genome")}>Gene Regulatory Networks</Link>
            <Link href={createUrl("/publications")}>Publications</Link>
            <Link href={createUrl("/media-coverage")}>Media Coverage</Link>
            <Link href={createUrl("/essays")}>Essays</Link>
            <Link href={createUrl("/romania-celebrates-sorin")}>Romania Celebrates</Link>
        </aside>
    );
};

export default HomeQuickLinks;
