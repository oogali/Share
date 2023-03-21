import React from 'react'
import {fireEvent, render, renderHook, act} from '@testing-library/react'
import {MockComponent} from '../__mocks__/MockComponent'
import {TooltipIconButton} from './Buttons'
import useStore from '../store/useStore'
import QuestionIcon from '../assets/icons/Question.svg'


describe('<TooltipIconButton />', () => {
  test('should render successfully', async () => {
    const testId = 'test-button'
    const rendered = render(
        <TooltipIconButton
          dataTestId={testId}
          title={'Hello Button'}
          // eslint-disable-next-line no-empty-function
          onClick={() => {}}
          icon={<QuestionIcon/>}
        />, {wrapper: MockComponent})

    const button = rendered.getByTitle('Hello Button')
    fireEvent.mouseOver(button)

    const tooltip = await rendered.findByRole('tooltip')
    expect(tooltip).toBeInTheDocument()
  })
  test('show tooltip when the help is activated', async () => {
    const {result} = renderHook(() => useStore((state) => state))
    await act(() => {
      result.current.toggleIsHelpTooltips()
    })
    const {getByText} = render(
        <MockComponent>
          <TooltipIconButton
            title={'TestTooltip'}
            // eslint-disable-next-line no-empty-function
            onClick={() => {}}
            icon={<QuestionIcon/>}
          />
        </MockComponent>)
    expect(await getByText('TestTooltip')).toBeVisible()
  })
})
