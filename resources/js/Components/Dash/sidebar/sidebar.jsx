import { usePage, router } from "@inertiajs/react";
import { Avatar, Tooltip } from "@nextui-org/react";

import { Sidebar } from "./sidebar.styles";
import { useSidebarContext } from "@/context/dash";

import { CollapseItems, SidebarItem, SidebarMenu } from ".";
import { AccountsIcon } from "@/Components/icons";
import { ListMenuDashItems } from "../list-menu-dash";

export const SidebarWrapper = () => {
    const { collapsed, setCollapsed } = useSidebarContext();

    // const router = router();

    console.log(router);

    return (
        <aside className="h-screen z-[202] sticky top-0">
            {collapsed && (
                <div className={Sidebar.Overlay()} onClick={setCollapsed} />
            )}
            <div
                className={Sidebar({
                    collapsed: collapsed,
                })}
            >
                <div className={Sidebar.Header()}>
                    Lorem ipsum dolor sit amet
                    <br />
                    elit. Nisi, temporibus!
                    {/* <CompaniesDropdown /> */}
                </div>
                <div className="flex flex-col justify-between h-full">
                    <div className={Sidebar.Body()}>
                        {ListMenuDashItems.map((item, index) => (
                            <SidebarMenu
                                key={item.title + index}
                                title={item.title}
                            >
                                {item.items.map((subitem, index) => (
                                    <SubRenderItems
                                        item={subitem}
                                        key={subitem.title + index}
                                    />
                                ))}
                            </SidebarMenu>
                        ))}
                    </div>
                    <div className={`${Sidebar.Footer()} py-2 mt-4`}>
                        <Tooltip content={"Settings"} color="primary">
                            <div className="max-w-fit">
                                <AccountsIcon />
                            </div>
                        </Tooltip>
                        <Tooltip content={"Adjustments"} color="primary">
                            <div className="max-w-fit">
                                <AccountsIcon />
                            </div>
                        </Tooltip>
                        <Tooltip content={"Profile"} color="primary">
                            <Avatar
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                size="sm"
                            />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </aside>
    );
};

const SubRenderItems = ({ item }) => {
    const { url, component } = usePage();

    // console.log(item.href);
    // console.log(url);
    // console.log(component);

    if (item.href) {
        return (
            <SidebarItem
                isActive={url === item.href}
                title={item.title}
                icon={item.icon}
            />
        );
    }

    return (
        <CollapseItems
            icon={item.icon}
            items={item.subitems}
            title="Balances"
        />
    );
};
