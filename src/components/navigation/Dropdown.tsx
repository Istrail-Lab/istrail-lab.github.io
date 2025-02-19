import { useState } from "react";
import { createUrl } from "../../config/site";

interface DropdownProps {
    dropdownHeading: string;
    dropdownLinks: Record<string, string>;
}

export const Dropdown = ({ dropdownHeading, dropdownLinks }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{dropdownHeading}</span>
                <svg
                    className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="px-4 py-2">
                    <div className="flex flex-col gap-2">
                        {Object.entries(dropdownLinks).map(([name, link]) => {
                            const href = typeof link === 'string' ? createUrl(link) : '';
                            return (
                                <a
                                    key={name}
                                    href={href}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                >
                                    {name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

interface DropdownWithSubheadingsProps {
    dropdownHeading: string;
    dropdownLinks: Record<string, Record<string, string>>;
}

export const DropdownWithSubheadings = ({
    dropdownHeading,
    dropdownLinks,
}: DropdownWithSubheadingsProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{dropdownHeading}</span>
                <svg
                    className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="px-4 py-2">
                    <div className="flex flex-col gap-4">
                        {Object.entries(dropdownLinks).map(([subheading, links]) => (
                            <div key={subheading} className="flex flex-col gap-2">
                                <h3 className="font-bold text-gray-900">{subheading}</h3>
                                <div className="flex flex-col gap-2">
                                    {Object.entries(links).map(([name, link]) => {
                                        const href = typeof link === 'string' ? createUrl(link) : '';
                                        return (
                                            <a
                                                key={name}
                                                href={href}
                                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                            >
                                                {name}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
