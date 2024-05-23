import Head from "next/head";
import Image from "next/image";

type FeatureCardProps = {
  color: string;
  title: string;
  description: string;
  image: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  color,
  title,
  description,
  image,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-4 bg-white px-6">
      <h1 className="font-poppins text-very-dark-blue w-full text-left text-xl font-semibold">
        {title}
      </h1>
      <p className="font-poppins text-grayish-blue w-56 text-left text-sm font-extralight">
        {description}
      </p>
      <Image
        src={`/images/icon-${image}.svg`}
        width={64}
        height={64}
        alt={`${image} icon`}
        className="my-2 h-16 w-16 self-end"
      />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Four Card Feature Section</title>
        <meta name="description" content="four-card-feature-section" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="bg-very-light-gray flex min-h-screen flex-col items-center justify-center pb-8 pt-20">
        {/* Header */}
        <div className="mb-16 flex max-w-[420px] flex-col items-center gap-2 lg:max-w-[480px]">
          <h1 className="font-poppins text-grayish-blue text-3xl font-extralight lg:text-4xl">
            Reliable, efficient delivery
          </h1>
          <h1 className="font-poppins text-very-dark-blue text-3xl font-semibold lg:text-4xl">
            Powered by Technology
          </h1>
          <p className="font-poppins text-grayish-blue my-4 max-w-[86%] text-center font-extralight leading-6 tracking-wide lg:text-lg">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        {/* Feature Cards */}
        <div className="flex w-[380px] flex-col items-center md:gap-4 lg:w-full lg:flex-row lg:justify-center lg:gap-0">
          <div
            className={`bg-cyan mb-8 flex h-[220px] w-[350px] items-center justify-center overflow-hidden rounded-lg pt-1 shadow-2xl`}
          >
            <FeatureCard
              color="cyan"
              title="Supervisor"
              description="Monitors activity to identify project roadblocks"
              image="supervisor"
            />
          </div>

          {/* Vertical Cards */}
          <div className="flex w-full flex-col items-center lg:w-1/3">
            <div
              className={`bg-red mb-8 flex h-[220px] w-[350px] items-center justify-center overflow-hidden rounded-lg pt-1 shadow-2xl`}
            >
              <FeatureCard
                color="red"
                title="Team Builder"
                description="Scans our talent network to create the optimal team for your project"
                image="team-builder"
              />
            </div>
            <div
              className={`bg-orange mb-8 flex h-[220px] w-[350px] items-center justify-center overflow-hidden rounded-lg pt-1 shadow-2xl`}
            >
              <FeatureCard
                color="orange"
                title="Karma"
                description="Regularly evaluates our talent to ensure quality"
                image="karma"
              />
            </div>
          </div>
          <div
            className={`bg-blue mb-8 flex h-[220px] w-[350px] items-center justify-center overflow-hidden rounded-lg pt-1 shadow-2xl`}
          >
            <FeatureCard
              color="blue"
              title="Calculator"
              description="Uses data from past projects to provide better delivery estimates"
              image="calculator"
            />
          </div>
        </div>
      </main>
    </>
  );
}
