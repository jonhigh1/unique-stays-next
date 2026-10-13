import { Suspense } from 'react'
import type { Metadata } from 'next'
import Hero from './_home/Hero'
import HeroSection from './_home/HeroSection'
import HomeBody from './_home/HomeBody'
import { getHeroSlides } from './_home/hero-slides'
import { HERO_FALLBACK_CATEGORIES, HERO_FALLBACK_STATS } from './_home/home-fallback'
import { getEditorsPickStays } from '@/lib/payload-queries'
import { buildHomepageJsonLd, serializeJsonLd } from '@/lib/jsonld'

export const revalidate = 86400

export const metadata: Metadata = {
  // Resolved against layout.metadataBase (www) → https://www.uniquestaysusa.com/
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  // Top stays feed the homepage ItemList. Real Payload data; cached.
  const topStays = await getEditorsPickStays()
  const homeJsonLd = buildHomepageJsonLd(topStays)
  const heroSlides = getHeroSlides(new Date())

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.975 0.012 85)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeJsonLd) }}
      />
      <link rel="preconnect" href="https://img.uniquestaysusa.com" crossOrigin="" />
      <Suspense
        fallback={
          <Hero
            slides={heroSlides}
            categories={HERO_FALLBACK_CATEGORIES}
            stats={HERO_FALLBACK_STATS}
          />
        }
      >
        <HeroSection slides={heroSlides} />
      </Suspense>
      <Suspense fallback={null}>
        <HomeBody />
      </Suspense>
    </div>
  )
}
