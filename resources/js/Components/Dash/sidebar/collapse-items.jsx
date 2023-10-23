import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ChevronUpIcon } from "../../icons/chevron-up-icon";
import { Link } from "@inertiajs/react";

export const CollapseItems = ({ icon, items, title }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex gap-4 h-full items-center cursor-pointer">
            <Accordion className="px-0">
                <AccordionItem
                    indicator={<ChevronUpIcon />}
                    classNames={{
                        indicator: "data-[open=true]:-rotate-180",
                        trigger:
                            "py-0 min-h-[44px] hover:bg-default-100 rounded-xl active:scale-[0.98] transition-transform px-3.5",

                        title: "px-0 flex text-base gap-2 h-full items-center cursor-pointer",
                    }}
                    aria-label="Accordion 1"
                    title={
                        <div className="flex flex-row gap-2">
                            <span>{icon}</span>
                            <span>{title}</span>
                        </div>
                    }
                >
                    <ul className="pl-10 list-disc">
                        {items.map((item, index) => (
                            <Link
                                href={item.href}
                                key={item.href + index}
                                className="text-default-500 hover:text-default-900 transition-colors mb-2 last:mb-0"
                            >
                                <li>{item.title}</li>
                            </Link>
                        ))}
                    </ul>
                </AccordionItem>
            </Accordion>
        </div>
    );
};
