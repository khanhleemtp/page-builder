import { Element, useNode, UserComponent } from '@craftjs/core'
import React from 'react'
import { Button } from '../Button'
import { Container } from '../Container'

export type OnlyButtonsProp = {
  props?: any
  children?: JSX.Element | JSX.Element[]
}

export const OnlyButtons = ({ children, ...props }: OnlyButtonsProp) => {
  const {
    connectors: { connect },
  } = useNode()
  return (
    <div title="only-buttons" ref={connect} className="w-full mt-5" {...props}>
      {children}
    </div>
  )
}

OnlyButtons.craft = {
  rules: {
    canMoveIn: (nodes: any[]) =>
      nodes.every(
        (node: {
          data: {
            type: UserComponent<{
              background?: Record<'r' | 'g' | 'b' | 'a', number>
              color?: Record<'r' | 'g' | 'b' | 'a', number>
              buttonStyle?: string
              margin?: any[]
              text?: string
              textComponent?: any
            }>
          }
        }) => node.data.type === Button,
      ),
  },
}

export const Custom1 = (props: any) => {
  return (
    <Container {...props}>
      <h2 className="text-lg px-10 py-5 text-white">
        I'm a component that only accepts
        <br /> buttons.
      </h2>
      <Element canvas id="wow" is={OnlyButtons}>
        <Button />
        <Button buttonStyle="outline" color={{ r: 255, g: 255, b: 255, a: 1 }} />
      </Element>
    </Container>
  )
}

Custom1.craft = {
  ...Container.craft,
  displayName: 'Custom 1',
}
