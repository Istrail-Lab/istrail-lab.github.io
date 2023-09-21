import { CSSProperties, PropsWithChildren, useState } from "react";

const Abstract = ({
    children,
    title,
    blurb,
}: PropsWithChildren<{ blurb: string; title: string }>) => {
    const [showAbstract, setShowAbstract] = useState(false);

    return (
        <div className="grid gap-2">
            <h3
                className="text-lg font-bold"
                style={{ textWrap: "balance" } as CSSProperties}
            >
                {title}
            </h3>
            {showAbstract ? children : blurb}
            <button
                className="btn"
                onClick={() => {
                    setShowAbstract(!showAbstract);
                }}
            >
                {showAbstract ? "Hide" : "See more"}
            </button>
        </div>
    );
};

export default Abstract;
