import { PencilIcon, PlusIcon, TrashIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function WhatsappButton() {
  return (
    <Link

      href="https://api.whatsapp.com/message/HAKWQLATC4L4C1?autoload=1&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-3 z-50 border-white"
    >
      <button className="animate-shake bg-[#25D366] text-white p-4 rounded-full shadow-lg  border-4 border-white  hover:scale-125 transition-all duration-300">
        <svg
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-10 h-10"
        >
        <PhoneIcon className="h-8 md:ml-10" />
        </svg>
      </button>


    
    </Link>
  );
}
