import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import {
  selectOAuth,
  selectSubmissions
} from 'containers/App/selectors'

import Dropdown from 'containers/Dropdown'
import AuthMenuButton from 'components/AuthMenuButton'

import { Container, Hamburger, Nav, StyledButton, StyledLink, StyledA, DropDownItem } from './styles'

import iconSinglePane from 'images/icon-single-pane.svg'
import iconTwoPanes from 'images/icon-split-panes.svg'

export class Menu extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      showDropdown: false,
      shiftKey: false
    }
  }

  makeProviderList () {
    if (!(this.props.oauth && this.props.oauth.providers)) {
      return []
    } else {
      return this.props.oauth.providers
        .map((provider) => (
          <StyledA href={provider.url}>
            Log in with {provider.title}
          </StyledA>
        ))
    }
  }

  render () {
    const aboutSelected = this.props.path === 'about'
    const introSelected = this.props.path === 'intro'
    const surveying = !aboutSelected && !introSelected

    const isAuthenicated = this.props.oauth && this.props.oauth.oauth && this.props.oauth.oauth.provider

    let menuItems

    if (isAuthenicated) {
      menuItems = [
        <StyledA href={this.props.oauth.disconnect}>Log out</StyledA>
      ]

      if (this.state.shiftKey) {
        menuItems = [
          ...menuItems,
          ...this.makeProviderList()
        ]
      }
    } else {
      menuItems = this.makeProviderList()
    }

    menuItems = [
      <StyledLink className='show-on-mobile' selected={surveying} to={this.props.homepageLink}>Start Surveying!</StyledLink>,
      <StyledLink className='show-on-mobile' selected={aboutSelected} to='/about'>About</StyledLink>,
      ...menuItems
    ]

    return (
      <Container>
        <AuthMenuButton className='toggle-dropdown' onClick={this.toggleDropdown.bind(this)}
          oauth={this.props.oauth} submissions={this.props.submissions} />
        <Hamburger className='toggle-dropdown' onClick={this.toggleDropdown.bind(this)}>☰</Hamburger>
        <Dropdown show={this.state.showDropdown} onHide={this.hideDropdown.bind(this)}>
          {menuItems.map((item, index) => (
            <DropDownItem key={index}>
              {item}
            </DropDownItem>
          ))}
        </Dropdown>
        <Nav>
          <StyledButton selected={surveying && this.props.paneMode === 'split'} title='Split panes'
            onClick={this.props.splitPaneClick}><img alt='Switch to split pane mode' src={iconTwoPanes} /></StyledButton>
          <StyledButton selected={surveying && this.props.paneMode === 'single'} title='Single pane'
            onClick={this.props.singlePaneClick}><img alt='Switch to single pane mode' src={iconSinglePane} /></StyledButton>
          <StyledLink selected={aboutSelected} to='/about'>About</StyledLink>
        </Nav>
      </Container>
    )
  }

  hideDropdown () {
    this.setState({
      showDropdown: false
    })
  }

  toggleDropdown (event) {
    const shiftKey = event.nativeEvent && event.nativeEvent.shiftKey
    this.setState({
      showDropdown: !this.state.showDropdown,
      shiftKey
    })
  }
}

export default connect(createSelector(
  selectOAuth(),
  selectSubmissions(),
  (oauth, submissions) => ({
    oauth, submissions
  })
))(Menu)