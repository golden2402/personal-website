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
      <h1>Here's where my projects should go...</h1>

      <div className={styles.projects}>
        {projects.map((item, i) => <ProjectCard {...item} key={`project-${i}`} />)}
      </div>
    </div>
  )
}

export default Projects