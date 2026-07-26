import { useEffect, useMemo, useRef, useState } from 'react'
import { Icon } from './icons'
import './SlideShow.css'

interface SlideShowImage {
    src: string
    alt: string
}

interface SlideShowProps {
    images: SlideShowImage[]
}

/** Largura máxima do slide ativo dentro do slot — a sobra é o "peek" dos vizinhos. */
const ACTIVE_WIDTH_RATIO = 0.7

/** Usada até a imagem carregar e enquanto não há proporção medida. */
const FALLBACK_ASPECT = 1.6

export function SlideShow({ images }: SlideShowProps) {
    const [index, setIndex] = useState(0)
    const [aspects, setAspects] = useState<number[]>([])
    const [box, setBox] = useState({ width: 0, height: 0, gap: 20 })
    const rootRef = useRef<HTMLDivElement>(null)

    const goTo = (next: number) => {
        setIndex((next + images.length) % images.length)
    }

    // Cada slide é medido individualmente: com uma moldura única, prints de
    // formatos diferentes ganhavam faixas vazias em cima e embaixo.
    useEffect(() => {
        let active = true

        Promise.all(
            images.map(
                (image) =>
                    new Promise<number>((resolve) => {
                        const probe = new Image()
                        probe.onload = () =>
                            resolve(probe.naturalHeight > 0 ? probe.naturalWidth / probe.naturalHeight : FALLBACK_ASPECT)
                        probe.onerror = () => resolve(FALLBACK_ASPECT)
                        probe.src = image.src
                    }),
            ),
        ).then((measured) => {
            if (active) setAspects(measured)
        })

        return () => {
            active = false
        }
    }, [images])

    useEffect(() => {
        const root = rootRef.current
        if (!root) return

        const measure = () => {
            const track = root.querySelector('.pf-slideshow-track')
            const gap = track ? parseFloat(getComputedStyle(track).columnGap || '20') || 20 : 20

            setBox({ width: root.clientWidth, height: root.clientHeight, gap })
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
    }, [])

    // Cada slide fica limitado pela largura do slot (mantendo o peek) e pela
    // altura disponível, preservando a proporção da própria imagem.
    const sizes = useMemo(() => {
        if (!box.width || !box.height || aspects.length !== images.length) return []

        const maxWidth = box.width * ACTIVE_WIDTH_RATIO
        return aspects.map((aspect) => {
            const width = Math.min(maxWidth, box.height * aspect)
            return { width, height: width / aspect }
        })
    }, [aspects, box, images.length])

    // Centraliza o slide ativo: a sobra simétrica revela o anterior e o próximo.
    const offset = useMemo(() => {
        if (!sizes.length) return 0

        const before = sizes.slice(0, index).reduce((total, size) => total + size.width + box.gap, 0)
        return before - (box.width - sizes[index].width) / 2
    }, [sizes, index, box])

    return (
        <div className="pf-slideshow" ref={rootRef}>
            <div className="pf-slideshow-track" style={{ transform: `translateX(${-offset}px)` }}>
                {images.map((image, i) => (
                    <div
                        className="pf-slideshow-slide"
                        key={image.src}
                        style={sizes[i] ? { width: sizes[i].width, height: sizes[i].height } : undefined}
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
