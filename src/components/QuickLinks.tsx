const QuickLinks = () => {
    return (
        <aside className="xl:flex flex-col gap-4 py-20 fixed hidden left-[5%] w-48">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <a className="underline hover:text-blue-400" href="/publications">
                Publications
            </a>
            <a
                className="underline hover:text-blue-400"
                href="/sorin-istrail/grants"
            >
                Grants
            </a>
            <a className="underline hover:text-blue-400" href="/essays">
                Essays
            </a>
            <a className="underline hover:text-blue-400" href="/media-coverage">
                Media Coverage
            </a>
            <a
                className="underline hover:text-blue-400"
                href="/sorin-istrail/geneaology"
            >
                Advisor Geneaology
            </a>
        </aside>
    );
};

export default QuickLinks;
