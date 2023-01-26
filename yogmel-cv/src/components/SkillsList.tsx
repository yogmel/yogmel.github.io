import SkillItem from "./SkillItem";

type Item = string | string[] | SubList;

export interface SubList {
  mainItem: string;
  subItem: [string, string];
}

interface SkillList {
  title: string;
  data: Item[];
}

export default function SkillList(props: SkillList) {
  const { title, data } = props;

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {/* {data.map((item, index) => (
          <SkillItem key={index} item={item} />
        ))} */}
      </ul>
    </div>
  );
}
