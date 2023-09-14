interface Props {
    dropdownName: string;
    dropdownItems:
        | Record<string, string>
        | Record<string, Record<string, string>>;
}

const isNested = (
    item: string | Record<string, string>
): item is Record<string, string> => typeof item === "object";

export const NavDropdown = ({ dropdownName, dropdownItems }: Props) => {
    return (
        <li>
            <details>
                <summary>{dropdownName}</summary>
                <ul>
                    {Object.entries(dropdownItems).map(([label, item]) => (
                        <li>
                            {isNested(item) ? (
                                <>
                                    <span>{label}</span>
                                    <ul>
                                        {Object.entries(item).map(
                                            ([sublabel, link]) => (
                                                <li>
                                                    <a href={link}>
                                                        {sublabel}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </>
                            ) : (
                                <a href={item}>{label}</a>
                            )}
                        </li>
                    ))}
                </ul>
            </details>
        </li>
    );
};
