export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Virtual Ref",
      description:
        "Revolutionary AI-powered fitness app that serves as your personal trainer, using advanced pose...",
      color: "bg-green-500",
      icon: "VR",
    },
    {
      title: "Tulagram",
      description:
        "Effortlessly deliver vibrant tulip bouquets for every occasion. Select from a stunning array of colors...",
      color: "bg-red-500",
      icon: "T",
    },
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Case Studies</h2>
          <p className="text-gray-400 mb-12">
            Exemplifying Excellence in Every Single Project
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-850 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${study.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold">{study.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
