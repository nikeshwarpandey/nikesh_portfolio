import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import AnimatedBorderButton from '@/components/AnimatedBorderButton'

const projects = [
    {
        title: 'Mister Car Wash',
        description: 'Led the frontend architecture for a large-scale, customer-facing platform serving 500+ locations with Google Maps-based discovery, membership flows, and responsive UX across web and mobile experiences.',
        image: 'public/projects/mistercarwash.jpg',
        tags: ['React', 'Redux Toolkit', 'AWS', 'Google Maps API'],
        link: 'https://www.linkedin.com/in/nikeshwar-pandey-27014220/',
        github: 'https://mistercarwash.com/'
    },
    {
        title: 'Intelligent Insights',
        description: 'Delivered the frontend for a data-intensive product handling bot and license information workflows, improving responsiveness and maintaining scalable UI modules for a 20+ member team.',
        image: 'public/projects/intellingent_insights.jpg',
        tags: ['React', 'RTK', 'FusionCharts', 'JavaScript'],
        link: 'https://www.linkedin.com/in/nikeshwar-pandey-27014220/',
        github: 'https://telus-ii.itia.ai/'
    },
    {
        title: 'Channel 4',
        description: 'Contributed to the MINT delivery phase of a public-service media platform with reusable React components and polished, performance-oriented UI implementation.',
        image: 'public/projects/channel4_img.png',
        tags: ['React', 'Bootstrap', 'HTML5', 'CSS3'],
        link: 'https://www.linkedin.com/in/nikeshwar-pandey-27014220/',
        github: 'https://www.channel4.com/'
    },
    {
        title: 'CC Mobile / Rewardz / AvantiFurs',
        description: 'Built hybrid mobile experiences using Ionic, AngularJS, PhoneGap, and Google Maps with real-time data sync, push notifications, and location-aware features.',
        image: 'public/projects/connectedCorps_img.webp',
        tags: ['Ionic', 'AngularJS', 'PhoneGap', 'Mobile Apps'],
        link: 'https://www.linkedin.com/in/nikeshwar-pandey-27014220/',
        github: 'https://github.com/nikeshwarpandey'
    }
]

const Projects = () => {
    return (
        <section id="projects" className='py-32 relative overflow-hidden'>
            <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded'></div>
            <div className='absolute bottom-1/4 left-0 w-96 h-64 bg-highlight/5 rounded'></div>
            <div className='container mx-auto px-6 relative z-10'>
                <div className='text-center mx-auto max-w-3xl mb-16'>
                    <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
                        Featured Work
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
                        Projects that{' '}
                        <span>drive measurable impact.</span>
                    </h2>
                    <p className='text-muted-foreground animate-fade-in animation-delay-200'>
                        Selected work from my 13+ years of experience building scalable web platforms, dashboards, and mobile-first products.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-8'>
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            <div className='relative overflow-hidden aspect-video'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60' />

                                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <a
                                        href={project.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            <div className='p-6 space-y-4'>
                                <div className='flex items-start justify-between'>
                                    <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                                    <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />
                                </div>
                                <p className='text-muted-foreground text-sm'>{project.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {project.tags.map((tag, tagidx) => (
                                        <span
                                            key={tagidx}
                                            className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12 animate-fade-in animation-delay-500'>
                    <AnimatedBorderButton href='https://www.linkedin.com/in/nikeshwar-pandey-27014220/' target='_blank'>
                        View LinkedIn Profile
                        <ArrowUpRight className='w-5 h-5' />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    )
}

export default Projects