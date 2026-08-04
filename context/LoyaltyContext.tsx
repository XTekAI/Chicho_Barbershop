'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface LoyaltyContextType {
    open: boolean;
    openLoyalty: () => void;
    closeLoyalty: () => void;
}

const LoyaltyContext = createContext<LoyaltyContextType>({
    open: false,
    openLoyalty: () => {},
    closeLoyalty: () => {},
});

export function LoyaltyProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);

    const openLoyalty = useCallback(() => setOpen(true), []);
    const closeLoyalty = useCallback(() => setOpen(false), []);

    return (
        <LoyaltyContext.Provider
            value={{ open, openLoyalty, closeLoyalty }}
        >
            {children}
        </LoyaltyContext.Provider>
    );
}

export function useLoyalty() {
    return useContext(LoyaltyContext);
}
