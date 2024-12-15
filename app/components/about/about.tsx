export default function About() {
  return (
    <main className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About <span className="text-blue-500">MGC</span>
        </h1>
        <div className="border border-gray-300 rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Founded by <span className="font-semibold text-gray-800">Syed Minam Ur Rehman</span>, the Minam Group of Companies (MGC) stands as a beacon of innovation and progress. As a visionary conglomerate, MGC is dedicated to driving advancements across a diverse range of industries, fueled by a passion for excellence and a commitment to shaping a brighter future.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            With a sharp focus on innovation, the groups portfolio spans multiple sectors, including consulting, technology, and finance. Each division is meticulously managed to ensure sustainable growth and deliver exceptional value to clients and stakeholders. MGCs strategic approach not only meets the demands of todays dynamic marketplace but also anticipates and sets the trends of tomorrow.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            At MGC, we believe in pushing the boundaries of what is possible. By blending expertise with a forward-thinking mindset, we empower our clients and partners to stay ahead in an ever-evolving world. Whether it is through groundbreaking technological solutions, insightful consulting, or transformative financial strategies, MGC remains steadfast in its mission to create a meaningful and lasting impact.
          </p>
        </div>
      </div>
    </main>
  );
}
