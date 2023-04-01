import Style from "./About.module.css";

export default function About() {
  return (
    <div className={Style.body}>
      <h1> Juan Bosque</h1>
      <h3>Full Stack Web Developer</h3>

      <h3>
        Tech Skills: Javascript, React, Redux, CSS, Node, Express, Node,
        Sequelize, Postgres
      </h3>
      <h4>
        I am from Argentina, 37 years old, reliable, responsible. preferably in
        The front, although I can also develop the rear. Am Passionate, loves to
        learn new technologies or delve into concepts. I'm independent. I love
        solving problems and acquiring knowledge. I can do websites showing a
        home page, navigation bar, cards, details, inputs, searches,
        classifications, paging, routes, links, uploading files to cloudinary
        such as images, controlled component shapes, global and local states
      </h4>
    </div>
  );
}
