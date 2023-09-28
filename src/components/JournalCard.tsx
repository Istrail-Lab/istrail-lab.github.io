const JournalCard = ({
    img,
    title,
    href,
}: {
    img: string;
    title: string;
    href: string;
}) => {
    return (
        <div className="flex flex-col justify-center text-center gap-2">
            <a className="hover:ring-4 mx-auto" href={href}>
                <img className="object-contain h-36" src={img} alt={title} />
            </a>
            <h3 className="text-sm">{title}</h3>
        </div>
    );
};

export default JournalCard;
