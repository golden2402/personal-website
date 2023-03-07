import styles from '@/css/hero.module.css'

const paths = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
]

function HeroButton(params) {
  return (
    <li>
      <a href={params.href}>
        <h4 className={styles.heroButton}>{params.text}</h4>
      </a>
    </li>
  )
}

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <h1>hi, my name is</h1>
        <h1 className='title' id={styles.name}>John Golden</h1>

        <ul>
          {
            paths.map((item, i) => (
              <HeroButton text={item.name} href={item.href} key={`hero-button-${i}`} />
            ))
          }
          <li className={styles.resumeButton}>
            <a href="#projects">
              <h4 className={styles.heroButton}>Resume</h4>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero