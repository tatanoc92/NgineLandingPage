import Image from "next/image";
import Counter from "./components/Counter";
import Button from "./components/Button";
import PartnersSlider from "./components/PartnersSlider";

export default function Home() {
    return (<>
        {/* PAGE 1 */}
        <div className="grid justify-center p-8">
            <div className="grid grid-cols-2">
                {/* info */}
                <div>
                    <h1 className="h1">
                        Achieving health & fitness goals, made
                        <span className="text-primary">simple.</span>
                    </h1>
                    <p>
                        We have taken the guesswork out of achieving your health and fitness goals. With NgineFitness,
                        get personalized workouts and rehabilitation plans, expert advice, and the support you need to
                        succeed. Let us power your fitness journey, while you focus on smashing your goals!
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
                        <Button color={"primary"} text={"Become a beta-tester"}/>
                        <Button color={""} text={"Learn more"}/>
                    </div>
                    <div className="text-center mt-8">
                        <p>Sign up to our newsletter!</p>
                        <input type="text" className="input" placeholder="email"/>
                    </div>
                </div>

                {/* avatar image */}
                <Image src={"/athlete.png"} alt="" width={400} height={400}/>

            </div>
        </div>

        {/* slider */}
        <PartnersSlider/>
    </>);
}
