import AboutComponent from '@/components/ui/AboutComponent'
import Head from 'next/head'
import React from 'react'

const About = () => {
    return (
        <>
            <Head>
                <title>food ordering / about page </title>
            </Head>
            <AboutComponent />
        </>
    )
}

export default About