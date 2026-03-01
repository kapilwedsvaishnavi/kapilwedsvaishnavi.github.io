interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
 if (!isOpen) return null;
 return (
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
     <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
       <button
         className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
         onClick={onClose}
       >
         ✕
       </button>
       {children}
     </div>
   </div>
 );
};
export default Dialog;