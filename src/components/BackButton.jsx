import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <>
            <button className="btn btn-success" onClick={handleNavigate}>
                BACK TO HOMEPAGE
            </button>
        </>
    )
}

export default BackButton