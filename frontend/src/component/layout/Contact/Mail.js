import "./Mail.css"


function Mail() {


  return (
    <div className='backmail'>
        <div className='form_container'>
        <h1>Contact</h1>
        <form  className="form">
            <label>Name</label>
            <input type="text" name='name' className='Send'/>

            <label>Email</label>
            <input type="email" name="user_email" className='Send' />

            <label>Message</label>
            <textarea name="message" rows="4"/>
            <input type="submit" value="Send" className='btnSend'/>
        </form>
        </div>
    </div>
  )
}

export default Mail