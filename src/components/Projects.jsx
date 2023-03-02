import styles from '@/css/projects.module.css'

import ProjectCard from './ProjectCard.jsx'

const projects = [
  {
    name: '...and this website!',
    skills: ['JavaScript', 'React', 'HTML', 'CSS']
  }
]

function Projects() {
  return (
    // add id for hero navigation:
    <div className='section' id='projects'>
      <h1 className='title' >Projects</h1>
      <h4>Here are some things I've worked on:</h4>

      <div className={styles.projects}>
        {projects.map((item, i) => <ProjectCard {...item} key={`project-${i}`} />)}
      </div>
    </div>
  )
}

export default Projects