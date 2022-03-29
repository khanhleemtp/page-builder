import { useNode, UserComponent } from '@craftjs/core';

const Container: UserComponent = ({ children }) => {
  const {
    connectors: { drag },
  } = useNode();

  return (
    <div ref={drag as React.LegacyRef<HTMLDivElement> | undefined} id="anc">
      {children}
    </div>
  );
};

export default Container;
