import { useEffect, useRef, useState } from 'react'
import { Icon } from './icons'
import './SlideShow.css'

interface SlideShowImage {
    src: string
    alt: string
}

interface SlideShowProps {
    images: SlideShowImage[]
}

/** Quanto da largura disponível a imagem ativa ocupa, deixando o "peek" da próxima à mostra. */
const ACTIVE_WIDTH_RATIO = 0.86

export function SlideShow({ images }: SlideShowProps) {
    const [index, setIndex] = useState(0)
    const [aspect, setAspect] = useState(0)
    const [layout, setLayout] = useState({ containerWidth: 0, slideWidth: 0, slideHeight: 0, gap: 20 })
    const rootRef = useRef<HTMLDivElement>(null)

    const goTo = (next: number) => {
        setIndex((next + images.length) % images.length)
    }

    // A proporção da primeira imagem define a moldura, para que ela apareça
    // inteira — sem corte e sem sobra — em qualquer tamanho de tela.
    useEffect(() => {
        const probe = new Image()
        probe.onload = () => {
            if (probe.naturalHeight > 0) setAspect(probe.naturalWidth / probe.naturalHeight)
        }
        probe.src = images[0].src
    }, [images])

    useEffect(() => {
        const root = rootRef.current
        if (!root || !aspect) return

        const measure = () => {
            const track = root.querySelector('.pf-slideshow-track')
            const gap = track ? parseFloat(getComputedStyle(track).columnGap || '20') || 20 : 20

            const containerWidth = root.clientWidth
            const containerHeight = root.clientHeight
            // Limitada pela largura (mantendo o peek) e pela altura disponível.
            const slideWidth = Math.min(containerWidth * ACTIVE_WIDTH_RATIO, containerHeight * aspect)

            setLayout({ containerWidth, slideWidth, slideHeight: slideWidth / aspect, gap })
        }

        measure()

        const observer = new ResizeObserver(measure)
        observer.observe(root)
        window.addEventListener('resize', measure)
        window.addEventListener('orientationchange', measure)
        return () => {
            observer.disconnect()
            window.removeEventListener('resize', measure)
            window.removeEventListener('orientationchange', measure)
        }
    }, [aspect])

    const { containerWidth, slideWidth, slideHeight, gap } = layout
    // Centraliza o slide ativo: sobra simétrica revela o que vem antes e depois.
    const offset = slideWidth ? index * (slideWidth + gap) - (containerWidth - slideWidth) / 2 : 0

    return (
        <div className="pf-slideshow" ref={rootRef}>
            <div className="pf-slideshow-track" style={{ transform: `translateX(${-offset}px)` }}>
                {images.map((image, i) => (
                    <div
                        className="pf-slideshow-slide"
                        key={image.src}
                        style={slideWidth ? { width: slideWidth, height: slideHeight } : undefined}
                        aria-hidden={i !== index}
                    >
                        <img src={image.src} alt={image.alt} draggable={false} />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        className="pf-slideshow-arrow pf-slideshow-arrow-prev"
                        aria-label="Imagem anterior"
                        onClick={() => goTo(index - 1)}
                    >
                        <Icon name="arrowRight" size={16} style={{ transform: 'rotate(180deg)' }} />
                    </button>
                    <button
                        type="button"
                        className="pf-slideshow-arrow pf-slideshow-arrow-next"
                        aria-label="Próxima imagem"
                        onClick={() => goTo(index + 1)}
                    >
                        <Icon name="arrowRight" size={16} />
                    </button>
                </>
            )}

            <div className="pf-slideshow-dots">
                {images.map((image, i) => (
                    <button
                        key={image.src}
                        type="button"
                        className={`pf-slideshow-dot${i === index ? ' is-active' : ''}`}
                        aria-label={`Ver ${image.alt}`}
                        onClick={() => goTo(i)}
                    />
                ))}
            </div>
        </div>
    )
}
