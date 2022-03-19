import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <div className='c'>
        <div className="c-wrapper">
            <div className="c-title">
                <h2 className="t">
                    Contact
                </h2>
            </div>
            <div className="c-myside">
                <div className="row">
                    <div className="c-me col-1 col-lg-1">
                        Me, 
                    </div>
                    <div className="c-link col-11 col-lg-11">
                        <a className='insta' href="https://www.instagram.com/catchmedope">catch me dope</a> 
                        <a className='lindin' href="https://www.instagram.com/catchmedope">feeling like a pro</a> 
                        <a href="https://www.instagram.com/catchmedope">my source codes</a> 
                    </div>
                </div>
            </div>
            <div className="c-yourside mt-3">
                <div className="row">
                    <div className="c-you col-1">
                        You, 
                    </div>
                    <div className="c-youLink col-11">
                        <a className='insta'href="mailto:chiemelienwobodo8@gmail.com?subject=Hey there!">Just say hi</a> 
                        <a href="mailto:chiemelienwobodo8@gmail.com?subject = Join Our Team&body = I have a job for you">Join your Team</a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact