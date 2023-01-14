import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {isActive, item, onChangeActiveId} = props
  const {directionId, displayText} = item

  const onClickGradientDirection = () => {
    onChangeActiveId(directionId)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirection}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
