const MainImage = ({women, title}) => {

  const handleClick = (e) => {
      e.target.parentElement.style.background = "red"
  }

  return (
    <div className="image" onClick={handleClick}>
        <img src={women} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default MainImage