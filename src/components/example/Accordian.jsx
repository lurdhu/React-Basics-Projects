import React, { useState } from 'react';

//3rd

function QuestionItem({ item }) {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <div className="question-item">
            <h4 onClick={toggleShow}>
                {item.question}
            </h4>
            {show && <h6 className="answer">{item.answer}</h6>}
        </div>
    );
}

// 2nd

function AccordionItem({ data }) {
    return (
        <div className="accordion-item">
            {data.map((item) => (
                <QuestionItem key={item.id} item={item} />
            ))}
        </div>
    );
}

// 1 st 
function Accordion() {
    const data = [
        {
            id: 1,
            question: 'What is React?',
            answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
            id: 2,
            question: 'Why use React?',
            answer: 'React allows developers to create large web applications that can change data, without reloading the page.',
        },
        {
            id: 3,
            question: 'Who maintains React?',
            answer: 'React is maintained by Facebook and a community of individual developers and companies.',
        },
    ];

    return (
        <div className="accordion">
            <h2>FAQ's</h2>
            <AccordionItem data={data} />
        </div>
    );
}

export default Accordion;
