import axios from 'axios';
import './App.css';

function App() {
  const submitSMS = () => {
    console.log(name, email, phone, message);
    let sms = 'New message from ' + name + ' \n' + message + " \n contact: " + phone;
    axios.post('https://react-sesh-sms-3829.twil.io/sendsms', {
        Body: sms
    }).then(response => {
        console.log(response)
        if (response.data.status === "success") {
           console.log("sent successfully")
        }
    }).catch(err => {
        console.log(err)
    })
}
  return (
    <div>
      <button class="btn btn-primary" onClick={submitSMS}>Submit</button>
    </div>
  );
}

export default App;
