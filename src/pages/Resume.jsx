import ResumeData from "../components/ResumeData";
import SideCircleRing from "../components/SideCircleRing";
import { Skills } from "../components/Skills";

const Resume = () => {
  return (
    <div>
      <div className="mt-10 text-white flex lg:flex-row flex-col gap-8 lg:gap-0">
        <div className="flex flex-col gap-8 lg:w-1/2 w-full items-start justify-between">
          <div className="flex items-baseline justify-between">
            <h1 className="sm:text-5xl text-4xl w-fit shrink-0 font-bold">
              Education.
            </h1>
            <div className="h-[1.6px] w-full bg-white/30 "></div>
          </div>
          <div className="flex items-center gap-5 group">
            <SideCircleRing />
            <ResumeData
              title={"Master in Design"}
              passout={"Cambridge University / 2010 - 2014"}
              description={
                "Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst imperdiet nunc vulputate."
              }
            />
          </div>
          <div className="flex items-center gap-5 group">
            <SideCircleRing />
            <ResumeData
              title={"Master in Design"}
              passout={"Cambridge University / 2010 - 2014"}
              description={
                "Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst imperdiet nunc vulputate."
              }
            />
          </div>
          <div className="flex items-center gap-5 group">
            <SideCircleRing />
            <ResumeData
              title={"Master in Design"}
              passout={"Cambridge University / 2010 - 2014"}
              description={
                "Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst imperdiet nunc vulputate."
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:w-1/2 w-full items-start justify-between">
          <div className="flex items-baseline  justify-between">
            <h1 className="sm:text-5xl text-4xl w-fit shrink-0 font-bold">
              Experience.
            </h1>
            <div className="h-[1.6px] w-full bg-white/30 "></div>
          </div>
          <div className="flex items-center gap-5 group">
            <SideCircleRing />
            <ResumeData
              title={"Master in Design"}
              passout={"Cambridge University / 2010 - 2014"}
              description={
                "Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst imperdiet nunc vulputate."
              }
            />
          </div>
          <div className="flex items-center gap-5 group">
            <SideCircleRing />
            <ResumeData
              title={"Master in Design"}
              passout={"Cambridge University / 2010 - 2014"}
              description={
                "Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst imperdiet nunc vulputate."
              }
            />
          </div>
          <div className="flex items-center gap-5 group">
            <SideCircleRing />
            <ResumeData
              title={"Master in Design"}
              passout={"Cambridge University / 2010 - 2014"}
              description={
                "Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst imperdiet nunc vulputate."
              }
            />
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Resume;
