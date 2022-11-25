"use client"

import { useState, useEffect } from 'react'

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}

/*  ------------------------------ */
/*  Image helpers
/*  ------------------------------ */

export function buildSrc(image, { width, height, format, quality }) {
  let imgSrc = imageBuilder.image(image)

  if (width) {
    imgSrc = imgSrc.width(Math.round(width))
  }

  if (height) {
    imgSrc = imgSrc.height(Math.round(height))
  }

  if (format) {
    imgSrc = imgSrc.format(format)
  }

  if (quality) {
    imgSrc = imgSrc.quality(quality)
  }

  return imgSrc.fit('max').auto('format').url()
}

export function buildSrcSet(image, { srcSizes, aspect, format, quality }) {
  const sizes = srcSizes.map((width) => {
    let imgSrc = buildSrc(image, {
      ...{ width },
      height: aspect && Math.round(width * aspect) / 100,
      ...{ format },
      ...{ quality },
    })

    if (format) {
      imgSrc = imgSrc.format(format)
    }

    return `${imgSrc} ${width}w`
  })

  return sizes.join(',')
}