import { describe, expect, it } from 'vitest'
import { getHeroSlides, HERO_POOL, SHOW_COUNT } from './hero-slides'

describe('getHeroSlides', () => {
  it('returns the same slides for every time on one UTC day', () => {
    const start = getHeroSlides(new Date('2026-10-13T00:00:00.000Z'))
    const end = getHeroSlides(new Date('2026-10-13T23:59:59.999Z'))
    expect(end).toEqual(start)
  })

  it('rotates the pool by the UTC day of the month', () => {
    const slides = getHeroSlides(new Date('2026-10-03T12:00:00.000Z'))
    expect(slides).toHaveLength(SHOW_COUNT)
    expect(slides[0]).toBe(HERO_POOL[3])
  })
})
