

# Mystic Makes
### Handmade Crafts Website

This project is a simple website developed for a small business specializing in handmade crafts. The website includes features to showcase products, provide information about the business, and allow customers to make inquiries via a contact form.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Implementation Details](#implementation-details)
- [Future Enhancements](#future-enhancements)

## Features

1. **Homepage**
   - Header with business name and navigation menu (Home, About us, Contact us, Find us).
   - Featured section showcasing selected products with images and descriptions.
   - About section introducing the business.
   - Contact section with a form for customers to submit inquiries (name, email, message).
   - Footer with social media links (Instagram, Facebook).

2. **Form Validation**
   - Implemented using JavaScript to validate the contact form without using 'required' attribute:
     - Name field must not be empty. 
     - Email field must contain a valid email address.
     - Message field must not be empty.

3. **Responsiveness**
   - Website layout adjusts for various screen sizes including desktops, tablets, and mobile devices.

4. **Bonus Task: Image Slider**
   - Implemented a simple image slider in the featured section allowing users to scroll through multiple product images.

## Technologies Used

- HTML5
- CSS3 
- JavaScript (for form validation and image slider)
- Bootstrap 

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository from GitHub:

   ```
   git clone <https://github.com/Mitali155/Mitali_WCE_Assessment.git>
   ```

2. Navigate into the project directory:

   ```
   cd Mitali_WCE_Assessment
   ```

3. Open `index.html` in your web browser.

## Project Structure

```
handmade-crafts-website/
│
├── index.html
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── img/
│   └── (images used in the website)
│
└── README.md
```

## Implementation Details

- **HTML/CSS**: 
  - Structured the website with semantic HTML5 elements.
  - Styled using CSS for layout, colors, fonts, and responsiveness.

- **JavaScript**:
  - Implemented form validation to enhance user experience and ensure data integrity.
  - Created functionality for the image slider in the featured section.

## Future Enhancements

- Add a backend to handle form submissions and send emails to the business owner.
- Implement a product catalog with pagination or filtering options.
- Enhance the image slider with more interactive features like autoplay or navigation buttons.


