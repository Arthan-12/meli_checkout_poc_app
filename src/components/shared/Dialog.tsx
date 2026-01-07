import { ReactNode } from 'react';

interface DialogProps<T = unknown> {
  title?: string;
  children: ReactNode;
  actionButtons?: boolean;
  data?: T;

  onClose: () => void;
  onConfirm?: (confirmed: true, data?: T) => void;
}

export function Dialog<T>({
  title,
  children,
  actionButtons = false,
  data,
  onClose,
  onConfirm,
}: DialogProps<T>) {
  function handleConfirm() {
    onConfirm?.(true, data);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg mx-4 rounded-lg bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
