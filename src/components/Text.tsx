import { useNode } from '@craftjs/core';

interface TextComponentProps {
  text: string;
}

const TextComponent: React.FC<TextComponentProps> = ({ text }) => {
  const {
    connectors: { drag },
  } = useNode();

  return (
    <div ref={drag as React.LegacyRef<HTMLDivElement> | undefined} id="ihuhuhu">
      <h2>{text}</h2>
    </div>
  );
};

export default TextComponent;
