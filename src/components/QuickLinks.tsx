import type { HTMLProps } from "react";

export const Link = (props: HTMLProps<HTMLAnchorElement>) => {
    return (
        <a className="underline hover:text-blue-400" {...props}>
            {props.children}
        </a>
    );
};

const QuickLinks = () => {
    return (
        <aside className="xl:flex flex-col gap-4 py-20 fixed hidden left-[2%] w-44 z-10">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <Link href="/sorin-istrail">Sorin Istrail</Link>
            <Link href="/sorinfest">SorinFest</Link>
            <Link href="/sorin-istrail/teaching">Teaching</Link>
            <Link href="/sorin-istrail/honors">Honors & Awards</Link>
            <Link href="/sorin-istrail/grants">Grants</Link>
            <Link href="/sorin-istrail/genealogy.html">Advisor Genealogy</Link>
            <Link href="/sorin-istrail/music">Music</Link>
        </aside>
    );
};

export default QuickLinks;
