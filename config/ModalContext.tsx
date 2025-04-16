"use client";

import { createContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const ModalContext = createContext({});

const initialState = {
  title: "",
  description: "",
  showModal: false,
  onConfirm: () => {},
  child: undefined,
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [dialogData, setDialogData] = useState(initialState);

  const handleModalClose = () => setDialogData(initialState);

  return (
    <ModalContext.Provider value={{ setDialogData, handleModalClose }}>
      <Dialog open={dialogData.showModal} onOpenChange={handleModalClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{dialogData.title}</DialogTitle>
          </DialogHeader>

          <div className="py-2 text-sm text-muted-foreground">
            {dialogData.description}
          </div>

          {dialogData.child}

          {!dialogData.child && (
            <DialogFooter>
              <Button
                onClick={dialogData.onConfirm}
                className="bg-lime-500 hover:bg-lime-600"
              >
                Confirm
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>

      {children}
    </ModalContext.Provider>
  );
};
