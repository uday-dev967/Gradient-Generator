import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  Description,
  GradientList,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeId: gradientDirectionsList[0].directionId,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onGenerate = () => {
    const {color1, color2, activeId} = this.state
    const direction = gradientDirectionsList.filter(
      each => each.directionId === activeId,
    )
    const {value} = direction[0]
    this.setState({
      gradientValue: `to ${value}, ${color1}, ${color2}`,
    })
  }

  onChangeActiveId = id => {
    const gradient = gradientDirectionsList.filter(
      each => each.directionId === id,
    )
    const newId = gradient[0].directionId
    this.setState({activeId: newId})
  }

  render() {
    const {color1, color2, activeId, gradientValue} = this.state
    return (
      <>
        <AppContainer
          data-testid="gradientGenerator"
          gradientValue={gradientValue}
        >
          <ResponsiveContainer>
            <Heading>Generate a CSS Color Gradient </Heading>
            <Description>Choose Direction</Description>
            <GradientList>
              {gradientDirectionsList.map(each => (
                <GradientDirectionItem
                  key={each.directionId}
                  onChangeActiveId={this.onChangeActiveId}
                  item={each}
                  isActive={each.directionId === activeId}
                />
              ))}
            </GradientList>
            <Description>Pick the Colors</Description>
            <ColorPickerContainer>
              <CustomInputAndColorContainer>
                <ColorValue>{color1}</ColorValue>
                <CustomInput
                  onChange={this.onChangeColor1}
                  value={color1}
                  type="color"
                />
              </CustomInputAndColorContainer>
              <CustomInputAndColorContainer>
                <ColorValue>{color2}</ColorValue>
                <CustomInput
                  onChange={this.onChangeColor2}
                  value={color2}
                  type="color"
                />
              </CustomInputAndColorContainer>
            </ColorPickerContainer>
            <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
          </ResponsiveContainer>
        </AppContainer>
      </>
    )
  }
}

export default GradientGenerator
