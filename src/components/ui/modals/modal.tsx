import Modal from 'react-modal';
export type ModalProps = {
  children?: React.ReactNode;
  IsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Modals = ({ children, IsOpen, setIsOpen }: ModalProps) => {
  return (
    <>
      <Modal
        shouldCloseOnOverlayClick
        onRequestClose={() => setIsOpen(false)}
        isOpen={IsOpen}
        className="container z-10 mx-auto mt-8 flex w-full items-center justify-center border-none outline-none"
      >
        {children}
      </Modal>
    </>
  );
};
