interface Course {
  course: string;
  institution: string;
  location?: string;
}

interface Education {
  type: "education" | "course";
  data: Course[];
  styles?: string;
}

export default function Education(props: Education) {
  const { type, data, styles } = props;

  if (type === "education") {
    return (
      <>
        {data.map(item => (
          <div className={styles} key={item.course}>
            <h3>{item.institution}</h3>
            <p>{item.course}</p>
            <p>{item.location}</p>
          </div>
        ))}
      </>
    );
  }

  if (type === "course") {
    return (
      <ul>
        {data.map(item => (
          <li key={item.course}>
            {item.course} -{" "}
            <span className="t-lighter">{item.institution}</span>
          </li>
        ))}
      </ul>
    );
  }

  return null;
}
