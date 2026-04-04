import Image from 'next/image';
import Link from 'next/link';

export default function AboutSevenSpikes() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden dark:dark-surface-bg">
      <div className="wrapper">
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-gray-900 dark:text-white text-2xl lg:text-4xl font-bold mb-4">
              Seven Spikes
            </h2>
            <h3 className="text-gray-700 dark:text-gray-300 text-lg lg:text-xl font-semibold mb-6">
              Global Network of Specialized Operations
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base leading-relaxed">
              Seven Spikes represents a global network of independently operated companies with experience across construction, infrastructure, general trading, consultancy, design, real estate and hospitality. Our operations are coordinated through two primary association entities—one supporting activities in the UAE and the other facilitating international operations—allowing each company to operate independently within its local legal and regulatory framework while aligning on shared standards and objectives.
            </p>
          </div>

          {/* Strategic Platforms */}
          <div className="mb-8">
            <h3 className="text-gray-700 dark:text-gray-300 text-lg lg:text-xl font-semibold mb-6">
              Operating Through Two Strategic Platforms
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base mb-12">
              Seven Spikes operates through two primary operational platforms, aligned to regional markets and specialized services.
            </p>

            {/* Platforms Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* UAE Operations */}
              <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:shadow-lg dark:hover:shadow-xl transition">
                <div className="flex items-start gap-4 mb-6">
                  <Image
                    src="/images/seven-spikes/Other/UAE-Flag.png"
                    alt="UAE Flag"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <div>
                    <h4 className="text-primary-500 font-semibold mb-1 tracking-[0.08em]">
                      UAE OPERATIONS
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                      Aligned with <span className="font-bold">Seven Spikes Group L.L.C.</span>
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    <span className="font-semibold">Focus:</span> Roads & Infrastructure, Building, General Trading, Facilities Management
                  </p>
                </div>
                <Link
                  href="/companies"
                  className="text-primary-500 hover:text-primary-600 font-semibold text-sm transition"
                >
                  [ Explore UAE Operations ]
                </Link>
              </div>

              {/* International Operations */}
              <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:shadow-lg dark:hover:shadow-xl transition">
                <div className="flex items-start gap-4 mb-6">
                  <Image
                    src="/images/seven-spikes/Other/Globe.png"
                    alt="UAE Flag"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <div>
                    <h4 className="text-primary-500 font-semibold mb-1 tracking-[0.08em]">
                      INTERNATIONAL OPERATIONS
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                      Aligned with <span className="font-bold">Seven Spikes Overseas International Management Services L.L.C.</span>
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    <span className="font-semibold">Countries:</span> Turkey, Jordan, Oman, India
                  </p>
                </div>
                <Link
                  href="/companies"
                  className="text-primary-500 hover:text-primary-600 font-semibold text-sm transition"
                >
                  [ Explore International Operations ]
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
