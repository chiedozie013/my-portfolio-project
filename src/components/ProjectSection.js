import ProjectCard from "./ProjectCard";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import classes from "./ProjectSection.module.css";

const projects = [
  {
    title: "React  Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    image: photo1,
  },
  {
    title: "Django  Framework Space",
    description:
      "Powerful built-in features, and active community makes it a popular choice for developers around the world.",
    image: photo2,
  },
  {
    title: "Product Design Space",
    description:
      "Product design is an essential component of the product development process, as it directly impacts the success of a product in the market.",
    image: photo3,
  },
];

export default function ProjectSection() {
  return (
    <section className={classes.projectSection}>
      <div className={`fluidContainer ${classes.specialContainer}`}>
        <div className="sectionTitle">
          <h2>Featured Projects</h2>
        </div>
        <div className={classes.projectCatlog}>
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
