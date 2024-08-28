import Feed from "@components/Feed";
import Image from "next/image";

const Home = () => {
  return (
    <section className="flex flex-col w-full px-6">
      <div className="flex flex-col sm:flex-row sm:gap-32">
        <div>
          <h1 className="head_text text-center sm:text-left">
            Discover and Share
            <span className="purple_gradient text-center sm:text-left block">
              AI Powered Prompts
            </span>
          </h1>
          <p className="desc text-center sm:text-left">
            Welcome to Prompit – Where AI Fuels Your Imagination. Generate
            Unique, Tailored Prompts Instantly. Start Creating, Inspiring, and
            Innovating with the Power of AI
          </p>
        </div>
        <div className="sm:-mt-4 mx-auto sm:mx-0">
          <Image
            src="/assets/images/robo.png"
            height={300}
            width={300}
            alt="robot"
            className="object-contain"
          />
        </div>
      </div>

      <Feed />
    </section>
  );
};

export default Home;
