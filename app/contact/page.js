export default function ContactPage() {
  return (
    <section className="max-w-md">
      <h2 className="text-3xl font-semibold mb-4 text-amber-800">Contact Us</h2>

      <form className="bg-white p-6 rounded shadow space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-amber-300 p-2 rounded focus:border-amber-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-amber-300 p-2 rounded focus:border-amber-500 focus:outline-none"
        />
        <textarea
          placeholder="Message"
          className="w-full border border-amber-300 p-2 rounded focus:border-amber-500 focus:outline-none"
        />
        <button className="w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800">
          Send Message
        </button>
      </form>
    </section>
  );
}