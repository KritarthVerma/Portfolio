import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const [hasCopied,setHasCopied] = useState(false)
    const handleCopy = ()=>{
        navigator.clipboard.writeText('kritarth4444@gmail.com')
        setHasCopied(true)
        setTimeout(()=>{
            setHasCopied(false)
        },2000)
    }
  return (
    <section className='c-space my-20' id="about">
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img 
                        src='/assets/grid1.png' 
                        alt='grid-1' 
                        className='w-full sm:h-[276px] h-fit object-contain'
                    />
                    <div>
                        <p 
                            className='grid-headtext'
                        >
                            Hi, I'm Kritarth
                        </p>
                        <p 
                            className='grid-subtext'
                        >
                            I'm an emerging software developer with a focus on web development. 
                            I enjoy creating projects and improving my skills. 
                            I'm also interested in data structures and algorithms, working to strengthen my problem-solving abilities. 
                            I'm always looking to learn new tools and technologies to grow as a developer.
                        </p>
                    </div>
                </div>
            </div>
            <div 
                className='col-span-1 xl:row-span-3'
            >
                <div 
                    className='grid-container'
                >
                    <div className='flex flex-col items-center justify-center text-center'>
                        <img 
                            src='/assets/grid2.png' 
                            alt='grid-2' 
                            className='w-full sm:w-[276px] h-fit object-contain'
                        />
                    </div>
                    <div>
                        <p 
                            className='grid-headtext'
                        >
                            Tech Stack
                        </p>
                        <p 
                            className='grid-subtext'
                        >
                            I am skilled in C++ and JavaScript, using React to build interactive front-end applications. 
                            With experience in SQL and MongoDB, I handle data management efficiently, and I work with Node.js and Express.js to create robust backend systems.
                        </p>
                    </div>
                </div>
            </div>
            <div 
                className='col-span-1 xl:row-span-4'
            >
                <div 
                    className='grid-container'
                >
                    <div 
                        className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'
                    >
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor='rgba(0,0,0,0)'
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat:40,
                                lng:-100,
                                text:"I'm here",
                                color:"white",
                                size:200,
                            }]}
                        />
                    </div>
                    <div>
                        <p 
                            className='grid-headtext'
                        >
                            I work remotely across most timezones.
                        </p>
                        <p 
                            className='grid-subtext'
                        >
                            I'm based in India, with remote work available.
                        </p>
                        <a href="#contact">
                            <Button 
                                name="Contact Me" 
                                containerClass="w-full mt-10"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div 
                className='xl:col-span-2 xl:row-span-3 '
            >
                <div 
                    className='grid-container'
                >
                    <img 
                        src="/assets/grid3.png" 
                        alt="grid-3" 
                        className='w-full sm:h-[266px] h-fit object-contain'
                    />
                    <div>
                        <p 
                            className='grid-headtext'
                        >
                            My passion for coding
                        </p>
                        <p 
                            className='grid-subtext'
                        >
                            I'm passionate about solving problems and building solutions through code. 
                            For me, coding is more than just a profession; it's a creative pursuit that drives me to constantly learn and innovate.
                        </p>
                    </div>
                </div>
            </div>
            <div 
                className='xl:col-span-1 xl:row-span-2'
            >
                <div 
                    className='grid-container'
                >
                    <img 
                        src="/assets/grid4.png" 
                        alt="grid-4" 
                        className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
                    />
                    <div 
                        className='space-y-2'
                    >
                        <p 
                            className='grid-subtext text-center'
                        >
                                Contact me
                        </p>
                        <div 
                            className='copy-container' 
                            onClick={handleCopy}
                        >
                            <img 
                                src={hasCopied?'assets/tick.svg':'assets/copy.svg'} 
                                alt="copy"
                            />
                            <p 
                                className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'
                            >
                                kritarth4444@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
