import GetStartedForm from "../components/get-started-form";

const GetStartedPage = () => {
  return (
    <div className="leading-[31px] bg-[#d3c1be]  md:pt-20 pt-10">
      <div className="text-center mb-20 md:mb-0 px-5">
        <h1 className="font-brandon-medium-italic lg:text-[4rem] md:mb-20 mb-10">
          Better English (Makes) Greater Career Opportunities
        </h1>
        <p className="md:text-xl font-Open-Sans">
          Start your English learning journey now. We're up for the challenge!
        </p>
      </div>
      <div className="mt-20 md:w-1/2 w-full mx-auto flex items-center justify-center rounded-md bg-white py-20 md:px-20 px-10 mb-10">
        <div className="w-full">
          <GetStartedForm />
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
