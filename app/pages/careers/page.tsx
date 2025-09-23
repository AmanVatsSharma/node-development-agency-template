export default function CareersPage() {
  const roles = [
    { title: 'Senior Node.js Engineer', location: 'Remote / India', type: 'Full-time' },
    { title: 'Frontend Engineer (Next.js)', location: 'Remote / Toronto', type: 'Full-time' },
    { title: '3D/Graphics Engineer (WebGL)', location: 'Remote / California', type: 'Contract' },
  ];

  return (
    <div className="w-full">
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Careers</h1>
          <p className="text-gray-300">Join a global team building mission-critical enterprise platforms and immersive experiences.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 space-y-4 max-w-3xl">
          {roles.map((r, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-gray-800 dark:text-white">{r.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{r.location} • {r.type}</div>
              </div>
              <a href="/pages/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">Apply</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

