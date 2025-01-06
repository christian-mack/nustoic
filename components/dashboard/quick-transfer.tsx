import Image from "next/image";
import { ChevronRight, Send } from "lucide-react";

const recipients = [
  { name: "Livia Bator", role: "CEO", image: "https://place-hold.it/250x250" },
  {
    name: "Randy Press",
    role: "Director",
    image: "https://place-hold.it/250x250",
  },
  { name: "Workman", role: "Designer", image: "https://place-hold.it/250x250" },
];

export function QuickTransfer() {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-6">Quick Transfer</h3>
      <div className="flex space-x-4 mb-6">
        {recipients.map((recipient) => (
          <div key={recipient.name} className="text-center">
            <Image
              src={recipient.image}
              alt={recipient.name}
              width={48}
              height={48}
              className="rounded-full mb-2"
            />
            <div className="text-sm font-medium">{recipient.name}</div>
            <div className="text-xs text-gray-500">{recipient.role}</div>
          </div>
        ))}
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mt-2">
          <ChevronRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Write amount"
          defaultValue="$25.50"
          className="flex-1 p-3 rounded-lg bg-gray-100 border-none"
        />
        <button className="px-6 py-3 bg-[#4543E8] text-white rounded-lg flex items-center">
          <Send className="h-5 w-5 mr-2" />
          Send
        </button>
      </div>
    </div>
  );
}
