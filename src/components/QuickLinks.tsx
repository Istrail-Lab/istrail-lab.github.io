import type { HTMLProps } from "react";

const Link = (props: HTMLProps<HTMLAnchorElement>) => {
    return (
        <a className="underline hover:text-blue-400" {...props}>
            {props.children}
        </a>
    );
};

const QuickLinks = () => {
    return (
        <aside className="xl:flex flex-col gap-4 py-20 fixed hidden left-[5%] w-48">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <Link href="/sorin-istrail">Sorin Istrail</Link>
            <Link href="/sorin-istrail/teaching">Teaching</Link>
            <Link href="/sorin-istrail/honors">Honors & Awards</Link>
            <Link href="/sorin-istrail/grants">Grants</Link>
            <Link href="/sorin-istrail/geneology.html">Advisor Geneology</Link>
        </aside>
    );
};

export default QuickLinks;
