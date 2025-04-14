import { BoxReveal } from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import { Zenitho } from "uvcanvas";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] flex md:flex-row flex-col">
      <div className="h-screen overflow-hidden w-full md:w-1/2 absolute top-0 right-0">
        <Zenitho />
      </div>
      <div className="h-full md:w-1/2 w-full flex justify-center p-4 md:p-0 items-center">
        <div className="w-full max-w-lg flex flex-col overflow-hidden pt-8">
          <BoxReveal duration={0.5}>
            <p className="text-[3.5rem] text-white md:text-primary/90 font-semibold">
              Magic UI
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#A13162"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[4rem] text-white md:text-primary/90 leading-normal">
              UI library for{" "}
              <span className= "text-background md:text-foreground">Design Engineers</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#A13162"} duration={0.5}>
            <div className="mt-6 text-left">
              <p className="text-white md:text-primary/90">
                -&gt; 20+ free and open-source animated components built with
                <span className="font-semibold text-background md:text-foreground"> React</span>,
                <span className="font-semibold text-background md:text-foreground">
                  {" "}
                  Typescript
                </span>
                ,
                <span className="font-semibold text-background md:text-foreground">
                  {" "}
                  Tailwind CSS
                </span>
                , and
                <span className="font-semibold text-background md:text-foreground"> Motion</span>.
                <br />
                -&gt; 100% open-source, and customizable.
                <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#A13162"} duration={0.5}>
            <Button className="mt-[1.6rem] bg-foreground">Explore</Button>
          </BoxReveal>
        </div>
      </div>
      <div className="h-full md:w-1/2 w-full"></div>
    </div>
  );
};

export default Hero;
