type person = {
  name: string;
  profession: string;
  awardsDescription: string;
  discoveryDescription: string;
};

type ProfileProps = { person: person; imageSrc: string; size: number };

const maria: person = {
  name: "Maria Skłodowska-Curie",
  profession: "physicist and chemist",
  awardsDescription:
    "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
  discoveryDescription: "polonium (element)",
};

const katsuko: person = {
  name: "Katsuko Saruhashi",
  profession: "geochemist",
  awardsDescription: "Miyake Prize for geochemistry, Tanaka Prize",
  discoveryDescription: "a method for measuring carbon dioxide in seawater",
};

function ListItem(props: { label: string; content: string }) {
  return (
    <li>
      <b>{props.label}</b>
      {props.content}
    </li>
  );
}

function Profile(props: ProfileProps) {
  return (
    <section className="profile">
      <h2>{props.person.name}</h2>
      <img
        className="avatar"
        src={props.imageSrc}
        alt={props.person.name}
        width={props.size}
        height={props.size}
      />
      <ul>
        <ListItem label="Profession: " content={props.person.profession} />
        <ListItem
          label={
            "Awards: " + props.person.awardsDescription.split(",").length + " "
          }
          content={props.person.awardsDescription}
        />
        <ListItem
          label="Discovered: "
          content={props.person.discoveryDescription}
        />
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={maria}
        imageSrc="https://i.imgur.com/szV5sdGs.jpg"
        size={70}
      />
      <Profile
        person={katsuko}
        imageSrc="https://i.imgur.com/YfeOqp2s.jpg"
        size={70}
      />
    </div>
  );
}
