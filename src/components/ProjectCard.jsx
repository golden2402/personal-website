import styles from '@/css/projects.module.css'

function ProjectCard(params) {
  return (
    <div className={styles.projectCard}>
      <div id={styles.description}>
        <h1>{params.name}</h1>
        <h3>{params.skills.join(' ')}</h3>

        <p>
          Stuff.
        </p>
        
      </div>

      <div id={styles.image}>
        <img src='' />
      </div>
    </div>
  )
}

export default ProjectCard
