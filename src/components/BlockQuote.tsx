const BlockQuote = ({
    author,
    journal,
    children,
}: React.PropsWithChildren<{ author: string; journal: string }>) => {
    return (
        <blockquote className="p-4 md:py-0 my-4 border-l-4 border-gray-300 bg-gray-50 flex items-baseline">
            <svg
                className="hidden md:block w-8 h-8 text-gray-400/50 rotate-180 m-4 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <div className="px-2 flex-grow">
                <i>{children}</i>
                <br />
                <br />
                <div className="flex flex-col items-end text-md">
                    <p className="font-bold">{author}</p>
                    <p className="italic">{journal}</p>
                </div>
            </div>
        </blockquote>
    );
};

export default BlockQuote;
