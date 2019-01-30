import React from "react";
import "./App.css";

const App = () => {
  return <PersonList />;
};

const PersonList = () => {
  const people = [
    {
      img: 64,
      name: "Ali",
      job: "web develper"
    },
    {
      img: 65,
      name: "Umer farooq",
      job: "Backend Programmer"
    },
    {
      img: 66,
      name: "Juniad Ansar ",
      job: "Full Stack Programmer"
    }
  ];

  return (
    <React.Fragment>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dolorem
        optio officiis mollitia quas quasi.
      </Person>
      <Person person={people[2]} />
    </React.Fragment>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="Random from RandomUser" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default App;
