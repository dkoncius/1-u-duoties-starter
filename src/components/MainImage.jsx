const MainImage = ({women, title}) => {

  const handleClick = (e) => {
      e.target.parentElement.style.background = "red"
  }

  return (
    <div className="image" onClick={handleClick}>
        <img src={women} alt={title ? title : 'alt tekstas'} />
        <p>{title ? title : 'Title tekstas'}</p>
    </div>
  )
}

export default MainImage