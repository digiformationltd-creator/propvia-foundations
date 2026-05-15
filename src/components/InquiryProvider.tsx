import { createContext, useContext, useState, type ReactNode } from "react";
import { InquiryModal } from "./InquiryModal";

const InquiryCtx = createContext<{ open: () => void } | null>(null);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <InquiryCtx.Provider value={{ open: () => setOpen(true) }}>
      {children}
      <InquiryModal open={open} onClose={() => setOpen(false)} />
    </InquiryCtx.Provider>
  );
}

export function useInquiry() {
  const ctx = useContext(InquiryCtx);
  if (!ctx) throw new Error("useInquiry must be used inside InquiryProvider");
  return ctx;
}
