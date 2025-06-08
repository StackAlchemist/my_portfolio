import FloatingCards from "./FloatingCards"
import Heading from "./Heading"
import ProjectCard from "./ProjectCard"

const Body = () => {

    const stacks = [
        {
            text: 'Nodejs',
            image: '/assets/node-js-icon-909x1024-ig4gm9k7.png'
        },
        {
            text: 'ReactJS',
            image: '/assets/React (1).webp'
        },
        {
            text: 'NextJS',
            image: '/assets/nextjs.svg'
        },
        {
            text: 'TailwindCSS',
            image: '/assets/Tailwind_CSS_Logo.svg.png'
        },
        {
            text: 'Figma',
            image: '/assets/figma_img.png'
        },
        {
            text: 'MongoDB',
            image: '/assets/mongodb-icon.svg'
        },
        {
            text: 'PostgreSQL',
            image: '/assets/pg_logo.png'
        },

    ]




    const projects = [
        {
            text:'Belongeen Marketplace',
            desc: '',
            image: '/projects/belongeen.png',
            link: 'https://belongeen.vercel.app/',
            role: 'Frontend Developer'
        },
        {
            text:'Goes Ltd',
            desc: '',
            image: '/projects/goes.png',
            link: 'https://gani-ola.vercel.app/',
            role: 'UX Designer, Backend Developer'
        },
        {
            text:'Forever',
            desc: '',
            image: '/projects/forever.png',
            link: 'https://forevershopping.vercel.app/',
            role: 'Full Stack Developer'
        },
        {
            text:'Recipify',
            desc: '',
            image: '/projects/recipify.png',
            link: 'https://recipify-umber.vercel.app/',
            role: 'Full Stack Developer'
        },
        {
            text:'Spotify-Clone',
            desc: '',
            image: '/projects/spotify-clone.png',
            link: 'https://spotify-clone-sigma-ivory.vercel.app/',
            role: 'Frontend Developer'
        },
        {
            text:'Gemini AI Chatbot-Clone',
            desc: '',
            image: '/projects/gemini-clone.png',
            link: 'https://gemini-clone-one-rouge.vercel.app/',
            role: 'Developer'
        },
    ]

  return (
    <div>
        <section className="flex flex-col gap-3 justify-center items-center bg-black py-4">
            {/* <div>
                <img src="/assets/King Baldwin drip 💯🔥.jpeg" alt="logo" width={100} height={100} />
            </div> */}
            {/* <h2 className="text-black text-2xl font-bold">My Stacks</h2>
             */}
             <Heading text="My Stacks" />

            <div className="flex gap-3 md:gap-5 flex-wrap justify-center items-center">

                {stacks.map((stack, index) => (
                    <div key={index}>
                        <FloatingCards image={stack.image} text={stack.text} />
                    </div>
                ))}
                
            </div>

            <section className="flex flex-col gap-3 justify-center items-center bg-black mt-20 mb-20" >

             <Heading text="Selected Projects" />

             {projects.map((project, index) => (
                <ProjectCard key={index} text={project.text} image={project.image} link={project.link} role={project.role} />
             ))}
            </section>
        </section>
    </div>
  )
}
export default Body