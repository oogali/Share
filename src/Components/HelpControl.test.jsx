import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {StoreRouteThemeCtx} from '../Share.fixture'
import HelpControl from './HelpControl'


describe('HelpControl', () => {
  it('renders the first page of the HelpDialog', () => {
    const {getByTitle, getByText} = render(<HelpControl/>, {wrapper: StoreRouteThemeCtx})
    const button = getByTitle('Help')
    fireEvent.click(button)
    const text = getByText('Study the model using standard sections')
    expect(text).toBeInTheDocument()
  })

  it('navigates to the next page when the next button is clicked', () => {
    const {getByTestId, getByText} = render(<HelpControl/>, {wrapper: StoreRouteThemeCtx})
    const button = getByTestId('control-button-help')
    fireEvent.click(button)
    const nextPageButton = getByTestId('Next')
    fireEvent.click(nextPageButton)
    const text = getByText('Isolate selected element')
    expect(text).toBeInTheDocument()
  })
})
