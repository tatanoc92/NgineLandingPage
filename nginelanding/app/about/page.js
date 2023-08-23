import FeatureCard from "../components/FeatureCard";
import ImageCard from "../components/ImageCard";

import {
  GiClassicalKnowledge,
  GiThreeFriends,
  GiBowTieRibbon,
} from "react-icons/gi";

export default function AboutPage() {
  return (
    // PAGE 2
    <>
      <div className="grid grid-cols-2 w-full h-full">
        {/* features */}
        <div className="flex flex-col px-4">
          <FeatureCard
            icon={<GiClassicalKnowledge />}
            title={"Access to Expert Coaches and AI-Powered Advice"}
            description={
              "Experience the future of fitness with expert coaches and AI advice at your fingertips. Personalized workout guidance, injury rehabilitation support, and instant health answers - all in one app."
            }
          />
          <FeatureCard
            icon={<GiThreeFriends />}
            title={"Engaging Fitness Community & Sharing​​"}
            description={
              "Join a supportive fitness community that celebrates shared progress and success. Connect with like-minded individuals, trainers, and physiotherapists, turning your fitness journey into a collaborative experience."
            }
          />
          <FeatureCard
            icon={<GiBowTieRibbon />}
            title={"Personalized Fitness Tracking & Optimization​​"}
            description={
              "No more one-size-fits-all plans. With NgineFitness, enjoy tailored workouts based on your goals and progress, coupled with insightful tracking tools for continual performance optimization."
            }
          />
        </div>

        {/* feature images */}
        <div className="flex flex-col justify-around px-4">
          <ImageCard imageLink={"/next.svg"} />
          <ImageCard imageLink={"/next.svg"} />
          <ImageCard imageLink={"/next.svg"} />
        </div>
      </div>
    </>
  );
}
