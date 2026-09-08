import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'www.cleancharge.se';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0] ?? '';
  const isVercelHost = host.endsWith('.vercel.app');
  const isApexHost = host === 'cleancharge.se';

  // Consolidate all production traffic on the canonical www host.
  if (isApexHost || (isVercelHost && process.env.VERCEL_ENV === 'production')) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    url.port = '';
    const redirect = NextResponse.redirect(url, 308);
    if (isVercelHost) redirect.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return redirect;
  }

  if (!isVercelHost) {
    return NextResponse.next();
  }

  // Preview deployments stay reachable for review, but must not be indexed.
  const response = NextResponse.next();
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
