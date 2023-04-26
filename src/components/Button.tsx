import React from "react";

interface Props {
  onClick: () => void;
  classValue: any;
  children: string;
}

const Button = ({ onClick, classValue, children }: Props) => {
  return (
    <button onClick={onClick} className={classValue}>
      {children}
    </button>
  );
};

export default Button;
