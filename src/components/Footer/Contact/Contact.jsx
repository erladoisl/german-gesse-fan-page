const Contact = (props) => {
  return (
    <div className='col-2 inline center'>
      <img alt={`${props.name} logo`} className='icon' src={props.src} />
      <div>
        {props.name}
      </div>
    </div>
  )
}

export default Contact;