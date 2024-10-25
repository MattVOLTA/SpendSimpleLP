import React from 'react';

const messages = [
  {
    sent: "Coffee $4.50",
    received: "✅ Recorded! Food & Drinks: $95.50 left this month"
  },
  {
    sent: "Uber $22.30",
    received: "✅ Recorded! Transport: $127.70 left this month"
  },
  {
    sent: "Amazon books $32.99",
    received: "✅ Recorded! Shopping: $167.01 left this month"
  }
];

export function PhoneDemo() {
  return (
    <div className="w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-4 relative shadow-2xl">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl" />
      <div className="h-full w-full bg-gray-100 rounded-2xl p-4 overflow-hidden">
        <div className="text-center mb-4 text-gray-600 text-sm">Today</div>
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                  {msg.sent}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] shadow-sm">
                  {msg.received}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}