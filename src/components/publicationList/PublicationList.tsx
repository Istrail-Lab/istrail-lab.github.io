import type { Publication } from "./publications";

const PDFLink = ({ pdf }: { pdf: string }) => {
    return (
        <a
            className="text-2xl hover:fill-red-500"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
            >
                <path d="M64 464H96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288H336V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z" />
            </svg>
        </a>
    );
};

const DOILink = ({ doi }: { doi: string }) => {
    return (
        <a
            className="grayscale hover:grayscale-0"
            href={doi}
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 249 247"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="Path"
                    fill="#fab608"
                    stroke="none"
                    d="M 246.399994 123.5 C 246.399994 191.600006 191.299988 246.700012 123.200012 246.700012 C 55.100006 246.700012 0 191.600006 0 123.5 C 0 55.399994 55.100006 0.299988 123.200012 0.299988 C 191.299988 0.299988 246.399994 55.399994 246.399994 123.5"
                />
                <g id="Group">
                    <path
                        id="path1"
                        fill="#000000"
                        stroke="none"
                        d="M 94 62.899994 L 77.899994 62.899994 L 77.899994 96.299988 L 77.899994 108.799988 C 71.100006 99.299988 63.5 94.700012 53.199997 94.700012 C 32.199997 94.700012 19.899994 109.5 19.899994 134.200012 C 19.899994 158.399994 33.5 173.700012 52.399994 173.700012 C 63.899994 173.700012 71.699997 169.600006 77.5 160.100006 L 77.100006 170.799988 L 98.100006 170.799988 L 98.100006 62.899994 L 94 62.899994 Z M 59.800003 154.700012 C 48.300003 154.700012 41.300003 146.899994 41.300003 133.700012 C 41.300003 120.100006 48.300003 112.299988 59.800003 112.299988 C 70.899994 112.299988 78.300003 120.100006 78.300003 133.700012 C 78.300003 146.899994 71.399994 154.700012 59.800003 154.700012 Z"
                    />
                    <path
                        id="path2"
                        fill="#000000"
                        stroke="none"
                        d="M 145.5 173.600006 C 121.200012 173.600006 105 156.600006 105 134.700012 C 105 113.200012 121.600006 95.799988 145.5 95.799988 C 169.399994 95.799988 185.600006 112.399994 185.600006 134.700012 C 185.600006 156.600006 169 173.600006 145.5 173.600006 Z M 145.100006 115.200012 C 133.399994 115.200012 126.100006 122.899994 126.100006 134.600006 C 126.100006 146.299988 133.399994 154 145.100006 154 C 156.799988 154 164.100006 146.299988 164.100006 134.600006 C 164.200012 122.899994 156.899994 115.200012 145.100006 115.200012 Z"
                    />
                    <path
                        id="path3"
                        fill="#000000"
                        stroke="none"
                        d="M 203 62.899994 C 209.899994 62.899994 215.200012 68.200012 215.200012 75.100006 C 215.200012 82 209.5 87.700012 203 87.700012 C 196.100006 87.700012 190.799988 81.600006 190.799988 75.100006 C 190.899994 68.600006 196.100006 62.899994 203 62.899994 Z M 192.5 98.899994 L 213.600006 98.899994 L 213.600006 171 L 192.5 171 L 192.5 98.899994 Z"
                    />
                </g>
            </svg>
        </a>
    );
};

const PublicationCard = ({ publication }: { publication: Publication }) => {
    return (
        <div className="border-2 p-4 shadow-lg">
            <div className="flex gap-6 justify-between">
                <h3
                    className="text-2xl"
                    style={{ textWrap: "balance" } as React.CSSProperties}
                >
                    {publication.title}
                </h3>
                <span className="text-lg font-bold">{publication.year}</span>
            </div>
            <p className="py-2">{publication.authors.join(", ")}</p>
            <div className="flex gap-6 justify-between">
                <div>
                    {publication.publisher && <p>{publication.publisher}</p>}
                    <p>
                        {publication.journal && (
                            <span>
                                In <i>{publication.journal}</i>,{" "}
                            </span>
                        )}
                        {publication.volume && `vol. ${publication.volume}, `}
                        {publication.number && `no. ${publication.number}, `}
                        {publication.pages && `pg. ${publication.pages}`}
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    {publication.doi && <DOILink doi={publication.doi} />}
                    {publication.pdf && <PDFLink pdf={publication.pdf} />}
                </div>
            </div>
        </div>
    );
};

const PublicationList = ({ publications }: { publications: Publication[] }) => {
    return (
        <div className="flex flex-col gap-10 justify-center my-10">
            {publications.map((publication) => (
                <PublicationCard
                    key={publication.title}
                    publication={publication}
                />
            ))}
        </div>
    );
};

export default PublicationList;
