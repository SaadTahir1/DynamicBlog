"use client";

const Section = () => {
  return (
    <section className="w-full py-10">
      {/* Image */}
      <div className="w-full max-w-3xl mx-auto mb-6">
        <img
          src="SAARC.jpg"
          alt="Descriptive image"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
        South Asian Association for Regional Cooperation (SAARC)
        </h1>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
        SAARC was founded in Dhaka on 8 December 1985.[7] Its secretariat is based in Kathmandu, Nepal. The organization promotes economic development and regional integration.[8] It launched the South Asian Free Trade Area in 2006.[9] SAARC maintains permanent diplomatic relations at the United Nations as an observer and has developed links with multilateral entities, including the European Union. However, due to the geopolitical conflict between India and Pakistan and the situation in Afghanistan, the organization has been suspended for a long time, and India currently cooperates with its eastern neighbors through BIMSTEC.[10][11]
        </p>
      </div>
    </section>
  );
};

export default Section;
