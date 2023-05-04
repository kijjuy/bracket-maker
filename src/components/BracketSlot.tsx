// BracketSlot.tsx
import React, { useState } from "react";

interface PropsName {
  name: string;
  onDataChange: (newDataKey: string) => void;
  index: number;
  children?: React.ReactNode[];
}

const BracketSlot = (props: PropsName): JSX.Element => {
  const [parentName, setParentName] = useState(props.name);

  function handleClick() {
        props.onDataChange(props.name);
  }

  function handleParentUpdate(newName: string) {
    setParentName(newName);
  }

  return (
    <div className="bg-slate-300">
      <h2
        className="text-red-300 underline text-md m-4 border-solid border-2 rounded-lg border-sky-500 h-8 relative bg-slate-700 hover:bg-slate-400"
        onClick={handleClick}
      >-
        {parentName}
      </h2>
      <div>
        {props.children?.map((child, index) => {
          if (React.isValidElement(child)) {
            return (
              <child.type
                {...(child.props as PropsName)}
                onDataChange={props.onDataChange}
                onParentUpdate={handleParentUpdate}
                key={index}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BracketSlot;
