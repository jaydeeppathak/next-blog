import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.png" alt="Image" width={300} height={300} />
      </div>
      <h1>Hi, I'm ABCD </h1>
      <p>
        Nisi officia qui cillum consectetur deserunt consectetur officia pariatur eiusmod in consectetur sunt cupidatat
        adipisicing. Sint commodo irure ad esse aliqua occaecat. Laboris mollit elit officia nisi ad non ex magna nulla
        laboris sunt. Dolor aliqua Lorem ut esse do nostrud cillum. Ea cupidatat irure dolore sint amet sunt irure velit
        nisi in eu sint. Pariatur commodo occaecat ad dolor culpa ea. Ipsum id velit reprehenderit officia laborum elit
        consequat duis adipisicing proident proident mollit.
      </p>
    </section>
  );
};

export default Hero;
