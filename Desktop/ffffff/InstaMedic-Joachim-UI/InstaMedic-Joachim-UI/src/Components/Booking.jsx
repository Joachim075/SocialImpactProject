import "./Booking.css";


function Booking() {
    return (
        <>
            <div id="booking-scetion">

                <div id="book-banner">

                    <h1>How Booking works?</h1>

                    <h2>"How do I connect with an online doctor?"</h2>

                    <p>
                        Our virtual Medicare is designed to provide you with secure, trusted,
                        and easy access  to the  <br />advice and care you need, when you need it.
                    </p>

                    <button><a href="/">Book now</a></button>

                </div>

                <div id="book-guide">

                    <div id="book-illustraion">
                        <h1>Here is how to book an appointment.</h1>
                        <img src="./public/Pictures/tablet-login/tablet-login/cuate@2x.png" alt="An animation illustrating a man logging-in to his account to
                         book for an online appointment with a medical provider." />
                    </div>

                    <div id="book-steps">
                        <ol id="step-by-step-guide">

                            <li>
                                <span>Step 1</span>                                

                                Book an appointment to visit a general doctor. You can select which doctor
                                you would like to see and whether you prefer a phone or video call.
                                We have a variety of male and female doctors available to help you.

                            </li>

                            <li>
                                <span>Step 2</span>                                

                                Attend your virtual appointment from the comfort of your home using your
                                chosen method of communication.

                            </li>

                            <li>
                                <span>Step 3</span>           

                                Receive guidance and treatment recommendations from the medical providers.
                                The doctor can share any necessary prescription with your chosen pharmacy,
                                and you can opt to have medication delivered to your home for free or collect
                                in person if preferred.

                            </li>

                        </ol>

                    
                    </div>

                </div>

            </div>
        </>
    )
}
export default Booking;