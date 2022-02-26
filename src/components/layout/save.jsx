import React, { Component } from 'react'
import {
  Button,
  Header,
  Segment,
  TransitionablePortal,
} from 'semantic-ui-react'

export default class Save extends Component {
  state = { open: false }

  handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
  handleClose = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <div>
        <Button 
          content={open ? 'Salvo' : 'Salvar'}
          negative={open}
          positive={!open}
          onClick={this.handleClick}
          
        />
        <Button>Cancelar</Button>


        <TransitionablePortal onClose={this.handleClose} open={open}>
          <Segment
            style={{ left: 'auto', right: 'auto', position: 'fixed', top: 'auto', zIndex: 1000 }}
          >
            <Header>Salvo !</Header>
          </Segment>
        </TransitionablePortal>
      </div>
    )
  }
}