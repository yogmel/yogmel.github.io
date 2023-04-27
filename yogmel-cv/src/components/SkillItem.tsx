import { SubList } from "./SkillsList";

interface SkillItem {
  item: string | string[] | SubList;
}

interface TypeString {
  item: string;
}

const isComponentA = (props: SkillItem): props is TypeString => {
  // check if the specified property is in the given object
  return "item" in props;
};

export default function SkillItem(props: SkillItem) {
  const { item } = props;
  const type = typeof item;
  // if (isComponentA(item)) {
  //   return <li>{item}</li>;
  // } else {
  //   return <></>;
  // }
}
