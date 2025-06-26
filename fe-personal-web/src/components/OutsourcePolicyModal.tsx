// src/components/OutsourcePolicyModal.tsx
import React from 'react';

export default function OutsourcePolicyModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-lg relative">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          Outsource Policy
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This project is part of an outsourced contract and therefore cannot
          publicly share its source code or live demo. Thank you for your
          understanding.
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
