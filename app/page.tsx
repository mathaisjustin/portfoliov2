export default function Home() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-5xl">Heading Test (Instrument Serif)</h1>
      
      <h2 className="text-3xl">Subheading Test</h2>

      <p className="text-lg">
        This is a paragraph using Nunito. It should feel clean, readable, and slightly warm.
      </p>

      <div className="p-6 border border-[#C8BAA6] bg-[#EDE8DF] rounded-lg">
        <p>
          This is a card surface. Background should be slightly darker cream.
        </p>
      </div>

      <button className="bg-[#1C1410] text-[#FAF7F2] px-6 py-3 rounded-full">
        Primary Button
      </button>

      <button className="border border-[#C8BAA6] px-6 py-3 rounded-full">
        Secondary Button
      </button>
    </main>
  );
}