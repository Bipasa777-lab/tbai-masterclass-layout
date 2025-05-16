// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#180000] px-4 text-white">
      <h1 className="text-9xl font-extrabold text-red-700 mb-6 select-none">404</h1>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-500">
        Page Not Found
      </h2>
      <p className="text-gray-300 max-w-md text-center mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-md border-2 border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition"
      >
        Go back home
      </Link>
    </main>
  );
}
