import { useRouteError } from 'react-router-dom'
import React from 'react'

export default function ErrorPage() {
    const error = useRouteError()

    return (
        <div>
            <h1>ErrorPage</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
