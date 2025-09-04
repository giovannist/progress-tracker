import { useState } from 'react'
import './BallAndLine.css'


type DayInfo = {
    content: string,
    day: number,
    image: string | null
}

let dayInfo: DayInfo[] = [
    {
        day: 3,
        content: "Hey, welcome to the first entry! In summary, i plan this page to be something like a log for myself and for anyone interested/curious, i'll be recording anything programming-related that i'm working on, and hopefully be able to see my growth just with this line. I just finished the most barebone system i could make for this, i can only add text for now. Today is the 3rd of September 2025, i've been coding for roughly 5 months, and let's see where things go from here, i wanna make it so i can put images on these, i'll probably do it tomorrow",
        image: null
    },

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
            {(isOpened) && <ContentUI content={{ content: day.content, image: day.image }} />}
        </div>
    )
}

function ContentUI({ content }: { content: { content: string, image: string | null } }) {
    return (
        <div className='content-ui'>
            {content.content}
            {content.image}
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