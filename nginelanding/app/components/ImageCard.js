import Image from "next/image";

export default function IamgeCard({ imageLink }) {
  return (
    <div className="w-190 h-254 bg-gradient-to-br from-orange-400 to-indigo-700 rounded-2xl transition duration-300 hover:scale-105 hover:shadow-md mb-4">
      <div className="p-4 w-190 h-254 bg-gray-900 rounded-lg transition duration-200 hover:shadow-lg hover:scale-95 flex flex-col justify-center items-center text-center">
        <Image
          src={imageLink}
          width={300}
          height={300}
          alt=""
          className="pb-4"
        />
      </div>
    </div>
  );
}
