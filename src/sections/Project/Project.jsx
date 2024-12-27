import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
	return (
		<section id="projects" className={styles.container}>
			<h1 className="sectionTitle">Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard src={viberr} link="https://github.com/theb8821/FlappyBird" name="FlappyBird" desc="Pygame Recreation" />
				<ProjectCard src={freshBurger} link="https://github.com/theb8821/personal-website" name="Personal Website" desc="HTML, CSS and BootStrap" />
				<ProjectCard src={hipsster} link="https://github.com/theb8821/PingPong" name="PingPong" desc="Python Reacreation" />
				<ProjectCard src={fitLift} link="https://github.com/theb8821/Bill-Management-System-C" name="Billy" desc="Billing System in C" />
			</div>
		</section>
	);
}

export default Projects;
