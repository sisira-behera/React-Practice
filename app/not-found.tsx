import { Link } from "@/i18n/navigation";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The page you are looking for does not exist.</p>
          <Link key="homepage" href="/" className="text-blue-600 hover:underline dark:text-blue-400">
            Go back home
          </Link>
        </div>
      </body>
    </html>
  )
}