import Contact from "./Contact/Contact";
import c from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={c.footer + " text-white  bg-dark"}>
      <div className="container">
        <h4 className='center'>Contacts </h4>
        <div className={c.contact + " row"}>
          {props.contacts.map((contact, index) => {
            return <Contact name={contact.name} src={contact.src} key={`contact_${contact.name}`} />
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer;