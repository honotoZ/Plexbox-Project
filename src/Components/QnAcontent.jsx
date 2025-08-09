import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

import { faqQuestions } from '../utils/constant';

function QnAcontent() {
    console.log(faqQuestions)

    const [isOpen, setIsOpen] = useState(null);
    const toggle=(index)=>{
        console.log('click at',index);
        setIsOpen(isOpen==index ? null : index)
    }

    return (
        <div className='QnA-container text-white'>
            <div className='header text-center'>Question or two? Here’s an answer or two.</div>
            {
                faqQuestions.map((element,index)=>(
                    <div className='qna' key={index}>
                    <div
                    className={`qna-header ${isOpen?'active':''}`}
                    onClick={()=>toggle(index)}
                    >
                    <h5>{element.question}</h5>
                    <FaPlus className='icon1'/>
                    </div>

                    {isOpen==index &&
                    (
                        <p className='qna-body' dangerouslySetInnerHTML={{ __html: element.answer }}></p>
                    )}
                    </div>
                ))
            }
        </div>
    )
}

export default QnAcontent