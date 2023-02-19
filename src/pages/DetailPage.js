import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
    const { id } = useParams();
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, fontSize: '2.5em', fontWeight: 600}}>
             We can do api call with this id({id})
        </div>
    )
}
