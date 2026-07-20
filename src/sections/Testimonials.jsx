import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react'
import React, { useState } from 'react'

const testimonials = [
    {
        quote: "Nikeshwar turned our idea into a polished product in record time, and every UI detail felt intentional.",
        author: "Nikhil Juneja",
        role: "CTO, Root info solutions.",
        avatar: <User className='w-8 h-8' />
    },
    {
        quote: "His ability to simplify complex frontend logic while keeping performance high made a huge difference for our launch.",
        author: "Avinash Mishra",
        role: "Manager, HDFC Bank.",
        avatar: <User className='w-8 h-8' />
    },
    {
        quote: "Working with him felt effortless—he communicated clearly, delivered clean code, and always suggested better approaches.",
        author: "Abinish sharma",
        role: "Manager, HCL Technology.",
        avatar: <User className='w-8 h-8' />
    },
    {
        quote: "He brought a level of polish and reliability to our product that impressed both the team and our customers.",
        author: "Ravi Ranjan",
        role: "Senior Manager, Telus International.",
        avatar: <User className='w-8 h-8' />
    }
]

const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length)
    }

    const previous = () => {
        setActiveIdx(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        )
    }


    return (
        <section
            id="testimonials"
            className='py-32 relative overflow-hidden'
        >
            <div
                className='absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5
            rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'
            />
            <div
                className='container mx-auto px-6 relative z-10'
            >
                {/* Section Header */}
                <div
                    className='text-center max-w-3xl mx-auto mb-16'
                >
                    <span
                        className='text-secondary-foreground text-sm font-medium tracking-wider
                    uppercase animate-fade-in'
                    >
                        What People Say
                    </span>
                    <h2
                        className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in
                        animation-delay-100 text-secondary-foreground'
                    >
                        Kind words from {" "}
                        <span className='font-serif italic font-normal text-white'>
                            amazing people.
                        </span>
                    </h2>
                </div>
                {/* Testimonial Carousel */}
                <div className='max-w-4xl mx-auto'>
                    <div className='relative'>
                        {/* Main Testimonial */}
                        <div className='glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200'>
                            <div className='absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
                                <Quote className='w-6 h-6 text-primary-foreground' />
                            </div>
                            <blockquote className='text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4'>
                                {/* "{testimonials[0].quote}" */}
                                "{testimonials[activeIdx].quote}"
                            </blockquote>
                            <div className='flex items-center gap-4'>
                                <div className='w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center ring-2 ring-primary/20'>
                                    {testimonials[activeIdx].avatar}
                                </div>
                            </div>
                            <div>
                                <div className='font-semibold'>
                                    {testimonials[activeIdx].author}
                                </div>
                                <div className='text-sm text-muted-foreground'>
                                    {testimonials[activeIdx].role}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Testimonials Navigation */}
                    <div className='flex items-center justify-center gap-4 mt-8'>
                        <button className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all' onClick={previous}>
                            <ChevronLeft />
                        </button>

                        <div className='flex gap-2'>
                            {testimonials.map((_, idx) => (
                                <button
                                    onClick={() => setActiveIdx(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 
                                        ${idx === activeIdx
                                            ? "w-8 bg-primary"
                                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                        }`}
                                />
                            ))}
                        </div>

                        <button className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all' onClick={next}>
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials