import { Client } from "@notionhq/client";

const isValidEmail = (email) => {
  // Simple regex for email validation
  return /\S+@\S+\.\S+/.test(email);
};

const isValidPhoneNumber = (phoneNumber) => {
  // Regex to check if phone number starts with a '+' followed by digits
  return /^\+\d+/.test(phoneNumber);
};
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // Only allow POST requests
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { name, email, message, phoneNumber, budget } = req.body;

    // Check for missing fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return res.status(400).json({ message: 'Invalid phone number format. Please include country code e.g. +91' });
    }

    // Initialize the Notion client
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.NOTION_PAGE_ID;

    // Add data to Notion
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Name': { 
          title: [{ text: { content: name } }]
        },
        'Email': {
          email: email
        },
        'Message': {
          rich_text: [{ text: { content: message } }]
        },
        'Phone Number': {
          rich_text: [{ text: { content: phoneNumber || '' } }]
        },
        'Budget': {
          select: { name: budget || '' }
        }
      }
    });

    res.status(200).json({ message: 'Success', id: response.id });
  } catch (error) {
    console.error('Notion API error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}






              {/* <motion.div
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, delay: 0.3 }}
                variants={fadeInRight}
                className="section_title"
                style={{ paddingBottom: "60px" }}
              >
                <h2>Let&apos;s work together</h2>
              </motion.div>

              {isLoading && <Loader />}
              {!isLoading && !isSubmitted && (
                <form
                  onSubmit={handleMiniFormSubmit}
                  className="contact_form_hero"
                >
                  <div className="row">
                    <motion.input
                      type="text"
                      name="name"
                      value={miniFormData.name}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      placeholder="Your full name"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    />
                    <motion.input
                      type="email"
                      name="email"
                      value={miniFormData.email}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      placeholder="Email address"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    />
                    <motion.input
                      type="tel"
                      name="phoneNumber"
                      value={miniFormData.phoneNumber}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      placeholder="(+91-) Phone Number"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                      pattern="^\+\d+\s*\d+$"
                      title="Please enter a valid phone number with country code e.g. +91 7218271556"
                    />
                    <motion.select
                      name="budget"
                      value={miniFormData.budget}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    >
                      <option value="">Select Budget</option>
                      <option value="10000+">$10000+</option>
                      <option value="5000-10000">$5000 to $10000</option>
                      <option value="2500-5000">$2500 to $5000</option>
                      <option value="1500-2500">$1500 to $2500</option>
                      <option value="1000-1500">$1000 to $1500</option>
                      <option value="0-1000">$0 to $1000</option>
                    </motion.select>
                    <motion.textarea
                      name="message"
                      value={miniFormData.message}
                      onChange={handleMiniFormChange}
                      className="form-control input textarea"
                      placeholder="Enter Your Requirement"
                      rows="3"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    ></motion.textarea>
                    <motion.input
                      type="submit"
                      className="bg_btn_color"
                      value="Send Message"
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    />
                  </div>
                </form>
              )}

              {!isLoading && isSubmitted && (
                <div className="success-message">
                  <p>
                    Congratulations! Your form is submitted. We will reach out
                    to you within 1 day.
                  </p>
                  <button onClick={resetForm} className="bg_btn_color">
                    Submit Form Again
                  </button>
                </div>
              )} */}

