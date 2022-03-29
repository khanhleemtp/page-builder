import {
  Editor,
  Element,
  Frame,
  useEditor,
  useNode,
  UserComponent,
} from '@craftjs/core';
import './index.css';
import { Layers } from '@craftjs/layers';

const Text = ({ text }: { text: string }) => {
  const {
    connectors: { drag, connect },
  } = useNode();

  return (
    <div ref={(ref: HTMLDivElement) => connect(drag(ref))}>
      <h2>{text}</h2>
    </div>
  );
};

const Container: UserComponent = ({ children }) => {
  const {
    connectors: { drag, connect },
  } = useNode();

  return (
    <div
      ref={(ref: HTMLDivElement) => connect(drag(ref))}
      style={{
        minHeight: 20,
        minWidth: 20,
        background: '#888',
      }}
    >
      {children}
    </div>
  );
};

const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Toolbox</h1>

      <button
        ref={(ref: HTMLButtonElement) =>
          connectors.create(ref, <Text text="demo" />)
        }
      >
        Text
      </button>
      <button
        ref={(ref: HTMLButtonElement) =>
          connectors.create(ref, <Element canvas is={Container} />)
        }
      >
        Container
      </button>
    </div>
  );
};

Container.craft = { rules: { canMoveIn: () => true } };

export default function App() {
  return (
    <Editor resolver={{ Text, Container }}>
      <Frame>
        <Element is="div" style={{ background: '#333' }} canvas>
          <Text text="Sample" />
        </Element>
      </Frame>
      <Toolbox />
      <Layers />
    </Editor>
  );
}
