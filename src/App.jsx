import React from 'react'
import Work from './components/Work'
import SignUpForm from './components/Form'
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Work />} />
                <Route path="/login" element={<SignUpForm />} />
            </Routes>

        </>
    )
}

export default App