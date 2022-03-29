import { useEditor, Element } from '@craftjs/core';
import Text from './Text';
import Container from './Container';

const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div style={{ padding: '2rem' }} id="buýu">
      <h1>Toolbox</h1>

      <button
        ref={(ref) =>
          connectors.create(ref as HTMLButtonElement, <Text text="demo" />)
        }
      >
        Text
      </button>
      <button
        ref={(ref) =>
          connectors.create(
            ref as HTMLButtonElement,
            <Element canvas is={Container} />
          )
        }
      >
        Container
      </button>
    </div>
  );
};

export default Toolbox;
