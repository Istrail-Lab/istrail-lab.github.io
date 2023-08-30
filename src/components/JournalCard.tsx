const JournalCard = ({ img, title }: { img: string; title: string }) => {
    return (
        <div className="flex flex-col justify-center text-center gap-2">
            <img className="object-contain h-36" src={img} alt={title} />
            <h3 className="text-sm">{title}</h3>
        </div>
    );
};

export default JournalCard;
