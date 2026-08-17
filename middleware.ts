import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'www.cleancharge.se';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0] ?? '';
  if (!host.endsWith('.vercel.app')) {
    return NextResponse.next();
  }

  // Production alias (clean-charge-hemsida.vercel.app) should never rank.
  // Send crawlers and people to the canonical .se domain.
  if (process.env.VERCEL_ENV === 'production') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    url.port = '';
    const redirect = NextResponse.redirect(url, 308);
    redirect.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return redirect;
  }

  // Preview deployments stay reachable for review, but must not be indexed.
  const response = NextResponse.next();
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
