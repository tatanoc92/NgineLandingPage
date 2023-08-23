export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="w-190 h-254 bg-gradient-to-br from-indigo-400 to-orange-700 rounded-2xl transition duration-300 hover:scale-105 hover:shadow-md mb-4">
      <div className="p-4 w-190 h-254 bg-gray-900 rounded-lg transition duration-200 hover:shadow-lg hover:scale-95 flex flex-col justify-center items-center text-center">
        <div className="pb-4">{icon}</div>
        <div className="pb-4">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}
