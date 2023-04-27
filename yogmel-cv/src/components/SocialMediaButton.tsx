import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialMediaButton {
  href: string;
  title: string;
  icon: IconProp;
}

export default function SocialMediaButton(props: SocialMediaButton) {
  const { href, title, icon } = props;
  return (
    <a href={href} title={title} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} size="3x" />
    </a>
  );
}
