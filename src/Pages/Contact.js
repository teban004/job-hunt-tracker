function Contact() {
  
    return (
      <div className="contact">
        <h2>Contact Us</h2>
            <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out using the form below or through our other contact information.</p>

            <form action="#" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>

            <div class="contact-info">
                <h3>Other Ways to Reach Us:</h3>
                <p>Email: <a href="mailto:info@jobhunttracker.com">info@jobhunttracker.com</a></p>
                <p>Phone: +1 (123) 456-7890</p>
            </div>
      </div>
    );
  }
  
  export default Contact;
  