interface PositionCardProps {
    img: string;
    position: string;
    location: string;
    time: string;
}

const PositionCard = ({ img, position, location, time }: PositionCardProps) => {
    return (
        <div className="grid gap-2 text-center place-items-center">
            <h3
                className="font-bold"
                style={{ textWrap: "balance" } as React.CSSProperties}
            >
                {position}
            </h3>
            <img className="h-44" src={img} />
            <div>
                <p>{location}</p>
                <p className="italic">{time}</p>
            </div>
        </div>
    );
};

export default PositionCard;
