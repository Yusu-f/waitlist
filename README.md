# Botleague Waitlist Implementation

This README provides instructions on how to set up the Google Forms integration for the waitlist sections of the Botleague website.

## Google Forms Setup

1. **Create a Google Form:**
   - Go to [Google Forms](https://forms.google.com/)
   - Click on "+" to create a new form
   - Name your form (e.g., "Botleague Waitlist")
   - Add an email question (set as required)
   - Optional: Add any other fields you might want to collect

2. **Get the Form ID:**
   - After creating your form, look at the URL in your browser. It will look something like:
     ```
     https://docs.google.com/forms/d/e/1FAIpQLSdYC9wAIaxxxxxxxxxxxxxxxxxxxxx/viewform
     ```
   - The long string after `d/e/` and before `/viewform` is your form ID.

3. **Find the Field ID:**
   - Right-click on your form and select "View Page Source"
   - Search for "entry." in the source code
   - You'll find something like `name="entry.1234567890"` for each field
   - For the email field, note the number (e.g., "1234567890")

4. **Update the HTML:**
   - Open `index.html`
   - Replace `YOUR_GOOGLE_FORM_ID` with your actual form ID
   - Replace `EMAIL_FIELD_ID` with the entry ID you found for the email field

## Example:

If your form URL is:
```
https://docs.google.com/forms/d/e/1FAIpQLSdYC9wAIaxxxxxxxxxxxxxxxxxxxxx/viewform
```

And your email field has the entry ID "1234567890", then your form action would be:
```html
<form class="waitlist-form" action="https://docs.google.com/forms/d/e/1FAIpQLSdYC9wAIaxxxxxxxxxxxxxxxxxxxxx/formResponse" target="_blank" method="POST">
  <input type="email" name="entry.1234567890" placeholder="Enter your email" required class="waitlist-input" />
  <button type="submit" class="waitlist-button">Join Waitlist</button>
</form>
```

## How It Works

1. When a user submits their email, the JavaScript in `waitlist-form.js` intercepts the form submission.
2. The form data is sent to Google Forms via a fetch request.
3. A success message appears on the page, confirming the user's submission.
4. The form resets, ready for another submission.

This implementation allows you to collect emails without requiring a backend server while providing immediate feedback to users. 