import { BoxReveal } from "@/components/magicui/box-reveal"
import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <div className="w-full h-[calc(100vh-100px)] flex md:flex-row flex-col">
        <div className="h-full md:w-1/2 w-full flex justify-center p-4 md:p-0 items-center">
            <div className="w-full max-w-lg flex flex-col overflow-hidden pt-8">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-[3.5rem] font-semibold">
                        Magic UI<span className="text-[#5046e6]">.</span>
                    </p>
                </BoxReveal>
    
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <h2 className="mt-[.5rem] text-[4rem] leading-tight">
                        UI library for{" "}
                        <span className="text-[#5046e6]">Design Engineers</span>
                    </h2>
                </BoxReveal>
    
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <div className="mt-6 text-left">
                        <p>
                            -&gt; 20+ free and open-source animated components built with
                            <span className="font-semibold text-[#5046e6]"> React</span>,
                            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
                            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
                            and
                            <span className="font-semibold text-[#5046e6]"> Motion</span>.
                            <br />
                            -&gt; 100% open-source, and customizable.
                            <br />
                        </p>
                    </div>
                </BoxReveal>
    
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
                </BoxReveal>
            </div>
        </div>
        <div className="h-full md:w-1/2 w-full"></div>
    </div>
    )
}

export default Hero