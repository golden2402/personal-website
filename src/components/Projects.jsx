import styles from '@/css/projects.module.css'

import ProjectCard from './ProjectCard.jsx'

const projects = [
  {
    name: '...and this website!',
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    toolList: ['JavaScript', 'React', 'HTML', 'CSS']
  },
  {
    name: '...and this website!',
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    toolList: ['JavaScript', 'React', 'HTML', 'CSS', 'Ubuntu', 'Python', 'Go']
  },
]

function Projects() {
  return (
    // add id for hero navigation:
    <div className='section' id='projects'>
      <h1 className='title-small' >Projects</h1>
      <h4>Here are some things I've worked on:</h4>

      <div className={styles.projects}>
        {projects.map((item, i) => <ProjectCard {...item} key={`project-${i}`} />)}
      </div>
    </div>
  )
}

export default Projects