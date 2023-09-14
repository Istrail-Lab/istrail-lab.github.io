export interface Award {
    title: string;
    desc: string;
    year: number;
}

export const AwardCard = ({ award }: { award: Award }) => {
    return (
        <div className="border-2 p-4 shadow-lg">
            <div className="flex gap-6 justify-between">
                <h3
                    className="text-xl"
                    style={{ textWrap: "balance" } as React.CSSProperties}
                >
                    {award.title}
                </h3>
                <span className="text-md font-bold">{award.year}</span>
            </div>
            <p className="py-2">{award.desc}</p>
            {/* <div className="flex gap-6 justify-between">
                <div className="text-sm">
                    {publication.publisher && <p>{publication.publisher}</p>}
                    <p>
                        {publication.journal && (
                            <span>
                                In <i>{publication.journal}</i>
                            </span>
                        )}
                        {paperLocation.filter((x) => x).length > 0 &&
                            `, ${paperLocation.filter((x) => x).join(", ")}`}
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    {publication.pdf && <PDFLink pdf={publication.pdf} />}
                </div>
            </div> */}
        </div>
    );
};
