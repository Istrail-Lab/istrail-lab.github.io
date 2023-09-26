import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material";
import { useState } from "react";

interface DropdownProps {
    dropdownHeading: string;
    dropdownLinks: Record<string, string>;
}

export const Dropdown = ({ dropdownHeading, dropdownLinks }: DropdownProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ListItemButton onClick={() => setOpen((open) => !open)}>
                <ListItemText primary={dropdownHeading} />
                <ListItemIcon>
                    {!open ? <ExpandMore /> : <ExpandLess />}
                </ListItemIcon>
            </ListItemButton>
            <Collapse in={open}>
                <List component="div" disablePadding>
                    {Object.entries(dropdownLinks).map(([name, link]) => (
                        <ListItemButton href={link} key={name} sx={{ pl: 4 }}>
                            <ListItemText primary={name} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </>
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
    const [open, setOpen] = useState(false);

    return (
        <>
            <ListItemButton onClick={() => setOpen((open) => !open)}>
                <ListItemText primary={dropdownHeading} />
                <ListItemIcon>
                    {!open ? <ExpandMore /> : <ExpandLess />}
                </ListItemIcon>
            </ListItemButton>
            <Collapse in={open}>
                {Object.entries(dropdownLinks).map(([subheading, links]) => (
                    <List
                        component="div"
                        disablePadding
                        subheader={<ListSubheader>{subheading}</ListSubheader>}
                    >
                        {Object.entries(links).map(([name, link]) => (
                            <ListItemButton
                                href={link}
                                key={name}
                                sx={{ pl: 4 }}
                            >
                                <ListItemText primary={name} />
                            </ListItemButton>
                        ))}
                    </List>
                ))}
            </Collapse>
        </>
    );
};
