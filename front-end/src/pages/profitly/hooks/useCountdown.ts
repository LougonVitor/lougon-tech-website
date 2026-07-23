import { useEffect, useState } from 'react'

export interface CountdownParts {
    days: number
    hours: number
    minutes: number
    seconds: number
    isPast: boolean
}

function diffToParts(target: Date): CountdownParts {
    const diff = target.getTime() - Date.now()

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
    }

    const totalSeconds = Math.floor(diff / 1000)

    return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
        isPast: false,
    }
}

export function useCountdown(targetDate: Date): CountdownParts {
    const [parts, setParts] = useState<CountdownParts>(() => diffToParts(targetDate))

    useEffect(() => {
        const interval = setInterval(() => setParts(diffToParts(targetDate)), 1000)
        return () => clearInterval(interval)
    }, [targetDate])

    return parts
}
