import React from 'react'
import {PlexBlog1} from '../utils/constant'

function PlexBlog() {

    return (
        <>
            <div className='blog-container'>
                <h5 className='blog-header d-flex justify-content-center align-items-center'>Plex Blog</h5>
                <div className='blog-group'>
                    {/* You should not repeat  > React */}
                    {
                        PlexBlog1.map((element)=>(
                            <>
                                <div className='blog1' style={{
                                    position: 'relative',
                                    width: '30%',
                                    height: '90%',
                                    borderRadius: '20px',
                                    background: `url(${element.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    color: 'white',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'end',
                                    isolation: 'isolate'
                                }}>
                                    <div className='date1'>{element.date}</div>
                                    <div className='blog-h1'>{element.blog}</div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PlexBlog