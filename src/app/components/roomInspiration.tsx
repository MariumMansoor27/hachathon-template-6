import Image from 'next/image';

export default function RoomInspiration() {
  return (
    <div className="bg-[#FAF8F5] py-16 px-8 w-[1760px] h-[670px] mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-gray-600">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
          <button className="bg-yellow-500 text-white font-medium py-3 px-6 rounded-md hover:bg-yellow-600">
            Explore More
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Main Card */}
          <div className="relative group">
            <Image
              src="/room1.jpg" // Replace with your image
              alt="Room"
              width={500}
              height={500}
              className="rounded-md"
            />
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-md shadow-lg">
              <p className="text-sm text-gray-500">01 — Bed Room</p>
              <h3 className="text-lg font-semibold text-gray-800">Inner Peace</h3>
              <button className="mt-2 text-yellow-500 font-medium group-hover:text-yellow-600">
                →
              </button>
            </div>
          </div>

          {/* Secondary Card */}
          <div>
            <Image
              src="/room2.jpg" // Replace with your image
              alt="Room"
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}