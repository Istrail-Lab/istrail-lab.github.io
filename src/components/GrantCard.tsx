interface Grant {
    name: string;
    role: string;
    year: string;
    title: string;
}

const GrantCard = ({ grant }: { grant: Grant }) => {
    return (
        <div className="border-2 p-4 shadow-lg">
            <div className="flex gap-6 justify-between">
                <h3
                    className="text-xl"
                    style={{ textWrap: "balance" } as React.CSSProperties}
                >
                    {grant.name}
                </h3>
                <span className="text-md font-bold">{grant.year}</span>
            </div>
            <p
                className="text-sm py-2"
                style={{ textWrap: "balance" } as React.CSSProperties}
            >
                {grant.title}
            </p>
            <p className="text-md pt-4">{grant.role}</p>
        </div>
    );
};

export default GrantCard;
