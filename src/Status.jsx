import React, { useContext, useEffect, useState } from 'react'
import { AccountContext } from './Account'

const Status = () => {
    const [status, setStatus] = useState(false)
    const { getSession, state, logout } = useContext(AccountContext)

    useEffect(() => {
        getSession().then(session => {
            console.log("🚀 ~ file: Status.jsx:10 ~ getSession ~ session:", session)
            setStatus(true)
        }).catch(error => {
            console.log("🚀 ~ file: Status.jsx:13 ~ getSession ~ error:", error)
            setStatus(false)
        })
    }, [getSession, state.user])

    return (
        <div>{status ? <button type='button' onClick={logout}>Logout</button> : "You are not logged in"}</div>
    )
}

export default Status