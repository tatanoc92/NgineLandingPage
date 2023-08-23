import { GiClassicalKnowledge } from "react-icons/gi";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="w-190 h-254 bg-gradient-to-br from-indigo-400 to-orange-700 rounded-2xl transition duration-300 hover:scale-105 hover:shadow-md">
      <div className="p-4 w-190 h-254 bg-gray-900 rounded-lg transition duration-200 hover:shadow-lg hover:scale-90 flex flex-col justify-center items-center text-center">
        <div>{icon}</div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}
