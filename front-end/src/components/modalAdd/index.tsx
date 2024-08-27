interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ModalAdd({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Fecha o modal quando o backdrop é clicado
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Previne a propagação do clique para o backdrop
    e.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div
        className="relative bg-white p-5 rounded-lg max-w-[500px] w-full flex justify-center"
        onClick={handleContentClick}
      >
        <button
          className="absolute top-2 right-2 bg-none text-2xl cursor-pointer text-black"
          onClick={onClose}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
}
