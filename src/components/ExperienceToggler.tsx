import { StaticImageData } from "next/image";
import styles from "@/styles/Experience.module.css";
import ExperienceDetails from "./ExperienceDetails";
import ExperienceButton from "./ExperienceButton";
import React, { useCallback, useEffect, useRef, useState } from "react";

export interface Experience {
  active: boolean;
  companyName: string;
  role: string;
  date: string;
  logo: StaticImageData;
  description: string;
  highlights: string[];
}

interface ExperienceTogglerProps {
  data: Experience[];
}

export default function ExperienceToggler(props: ExperienceTogglerProps) {
  const { data } = props;

  const [top, setTop] = useState<string | number>("4em");
  const [left, setLeft] = useState<string | number>("4em");
  const [chosenExperience, setChosenExperience] = useState<Experience>(
    data[data.length - 1]
  );

  const inputEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputEl.current !== null) {
      console.log("inputEl", inputEl.current.offsetLeft);
      setLeft(inputEl.current.offsetLeft + inputEl.current.offsetWidth / 2);
    }
  }, []);

  const changeExperience = useCallback((chosenExperience: Experience) => {
    setChosenExperience(chosenExperience);
  }, []);

  return (
    <>
      <div className={styles.timeline}>
        {data.map((item, index) => {
          return (
            <React.Fragment key={item.companyName}>
              <ExperienceButton
                active={item === chosenExperience}
                experience={item}
                name={item.companyName}
                onClick={changeExperience}
              />

              {data.length - 1 !== index && <div className="divider"></div>}
            </React.Fragment>
          );
        })}
        {/* <div
          className={styles.timelinePointer}
          ref={inputEl}
          style={{ top, left }}
        ></div> */}
      </div>

      {data.map(item => {
        return (
          <ExperienceDetails
            key={item.companyName}
            active={item === chosenExperience}
            data={item}
          />
        );
      })}
    </>
  );
}
