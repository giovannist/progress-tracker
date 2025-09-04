import { useState } from 'react'
import './BallAndLine.css'

let days: number[] = [1, 4, 7, 12]

type DayInfo = {
    content: string,
    day: number,
    image: string | null
}

let dayInfo: DayInfo[] = [
    {
        day: 1,
        content: 'i did this and that and also this thing',
        image: null
    },
    {
        day: 4,
        content: 'i did this thing too and also this one',
        image: null
    },
    {
        day: 12,
        content: 'you wont believe what i did today my man',
        image: null
    }
]

function Ball({ day }: { day: number }) {
    return (
        <>
            <div className="ball">
                <div>
                    {day}
                </div>
            </div>
        </>
    )

}

function Line() {
    return (
        <div className='line'>
        </div>
    )

}

function BallAndLine({ day }: { day: DayInfo }) {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <div
            onClick={() => { setIsOpened(!isOpened) }}
            style={{ display: "flex", alignItems: 'center', justifyContent: 'center', position: 'relative' }}
        >
            <Line />
            <Ball day={day.day} />
            {(isOpened) && <ContentUI content={day.content} />}
        </div>
    )
}

function ContentUI({ content }: { content: string }) {
    return (
        <div className='content-ui'>
            {content}
        </div>
    )
}

function FullLine() {
    return (
        <div className='full-line' >
            {dayInfo.map(dayInfo => {
                return <BallAndLine day={dayInfo} />
            })}
        </div>
    )
}

export default FullLine;