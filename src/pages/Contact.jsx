//THEN I see a contact form with fields for a name, an email address, and a message
import { useState } from "react"
//WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required

//WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

export default function Contact() {
  const [formData, setFormData] = useState({ firstname: "", lastname: "" })
  //setFormData({firstname: "Robby", lastname:"Kurle"})

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Please enter the following:
      </p>
      <form>
        <input name="firstname" onChange={handleChange} value={formData.firstname} type="text"></input>
        <input name="lastname" onChange={handleChange} value={formData.lastname} type="text"></input>
        <textarea></textarea>
      </form>
    </div>
  );
}