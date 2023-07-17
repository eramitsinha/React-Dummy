import React from 'react'
import { useParams } from 'react-router-dom'

export default function Course() {
    const params = useParams()
    const {course} = params()
    return (
        <div>
            Course Name - {course}
        </div>
    )
}
