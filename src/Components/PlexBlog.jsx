import React from 'react'

function PlexBlog() {

    return (
        <>
            <div className='blog-container'>
                <h5 className='blog-header d-flex justify-content-center align-items-center'>Plex Blog</h5>
                <div className='blog-group'>
                    <div className='blog1'>
                        <div className='date1'>March 31, 2025</div>
                        <div className='blog-h1'>It's Go Time: The New Plex Experience Is Here</div>
                    </div>
                    <div className='blog2'>
                        <div className='date2'>March 19, 2025</div>
                        <div className='blog-h2'>Important 2025 Plex Updates</div>
                    </div>
                    <div className='blog3'>
                        <div className='date3'>January 22, 2025</div>
                        <div className='blog-h3'>New Year. Same Mission.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlexBlog