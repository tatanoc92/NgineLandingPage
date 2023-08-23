import Image from "next/image";
import Link from "next/link";
import Counter from "./components/Counter";
import Button from "./components/Button";
import PartnersSlider from "./components/PartnersSlider";

export default function Home() {
  return (
    <>
      {/* PAGE 1 */}
      <div className="grid grid-cols-2 p-8 ">
        {/* info */}
        <div>
          <h1 className="h1">
            {/* Achieving health & fitness goals, made */}
            <span className="text-primary">simple.</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            sapiente. Quo quis explicabo tenetur officia maxime asperiores
            quibusdam ad, neque inventore animi velit ipsam tempora placeat
            dicta suscipit aspernatur excepturi.
          </p>
          <div className="py-8 flex items-center gap-4">
            <Counter
              start={0}
              end={50}
              duration={5}
              label={"Expert coaches & physiotherapists"}
            />
            <Counter
              start={0}
              end={5000}
              duration={5}
              label={"satisfied clients"}
            />
            <Counter
              start={0}
              end={20}
              duration={5}
              label={"trusted clinics & gyms"}
            />
          </div>
          <div className="flex gap-6 justify-center">
            <Button color={"primary"} text={"Become a beta-tester"} />
            <Button color={""} text={"Learn more"} />
          </div>
          <div className="text-center mt-8">
            <p>Sign up to our newsletter!</p>
            <input type="text" className="input" placeholder="email" />
          </div>
        </div>

        {/* avatar image */}
        <div className="flex justify-center">
          <Image src={"/athlete.png"} alt="" width={400} height={400} />
        </div>
      </div>

      {/* slider */}
      <PartnersSlider />
    </>
  );
}
