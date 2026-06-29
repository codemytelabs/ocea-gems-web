import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-surface flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">💎</div>
        <p className="font-heading text-7xl text-sapphire font-semibold mb-2">404</p>
        <h1 className="font-heading text-2xl text-heading font-medium mb-3">
          This piece can't be found
        </h1>
        <p className="text-body text-sm leading-relaxed mb-8">
          The page you're looking for may have been moved or no longer exists. Let's get you back
          to something beautiful.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sapphire hover:bg-sapphire-dark text-white
              text-sm font-semibold rounded-lg transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-sapphire text-sapphire hover:bg-sapphire-lt
              text-sm font-semibold rounded-lg transition-all duration-300"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </div>
  )
}
