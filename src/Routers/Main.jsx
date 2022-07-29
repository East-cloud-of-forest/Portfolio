import classNames from 'classnames'
import '../Css/Main.scss'

const Main = ({firstMainAnimation}) => {
  return (
    <div className={classNames("router main_page", firstMainAnimation && 'firstAnimation')}>
        <h1>Main</h1>
    </div>
  )
}

export default Main