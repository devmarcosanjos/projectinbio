import React, { useRef } from "react";

export default function Modal({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  setIsOpen(false);
  return (
    <div className="fixed inset-0 bg-[#787878] flex items-center justify-center backdrop:blur-md z-50">
      <div ref={ref} className="">
        {children}
      </div>
    </div>
  );
}
