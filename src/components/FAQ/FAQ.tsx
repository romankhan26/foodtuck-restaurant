'use client'
import "./FAQ.css";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAQuestions = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full md:w-[45%] min-h-32 bg-[#faf7f2] text-black md:text-sm text-[12px] p-4 border-b'>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold">{question}</h1>
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Collapse answer" : "Expand answer"}
        >
          {open ? <AiOutlineMinus /> : <GoPlus />}
        </button>
      </div>
      <p className={`paragraph ${open ? 'paragraph_noclamp' : ''}`}>
        {answer}
      </p>
    </div>
  );
};

export default FAQuestions;
