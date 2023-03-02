import styles from '@/css/projects.module.css'

function ProjectCard(params) {
  return (
    <div className={styles.projectCard}>
      <div id={styles.description}>
        <h2>{params.name}</h2>
        <h4>{params.skills.join(', ')}</h4>

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
