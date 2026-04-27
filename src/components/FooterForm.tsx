"use client";

import { usePathname } from "next/navigation";
import { Column } from "@once-ui-system/core";
import { ContactForm } from "@/components/home/ContactForm";

export const FooterForm = () => {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isAbout = pathname === "/about";

    const paddingTop = isHome ? "0" : isAbout ? "60px" : "70px";

    return (
        <Column fillWidth style={{ paddingTop }}>
            <ContactForm />
        </Column>
    );
};
