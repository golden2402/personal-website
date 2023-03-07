import styles from '@/css/projects.module.css'

function ToolListItem({ name }) {
  return (
    <li>
      <h4>{name}</h4>
    </li>
  )
}

function ProjectCard(params) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.info}>
        <h2 className={styles.textBox}>{params.name}</h2>
        <p className={`${styles.textBox} ${styles.title}`}>
          {params.description}
        </p>

        <ul className={styles.toolList}>
          {
            params.toolList.map((toolName, i) => (
              // the key used here is not actually unique:
              <ToolListItem name={toolName} key={`tool-${i}`} />
            ))
          }
        </ul>

      </div>
      
      {/* TODO: add image */}
    </div>
  )
}

export default ProjectCard
