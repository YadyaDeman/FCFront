# Elegant Portfolio Website

## 📌 Overview
This is a dynamic and customizable portfolio website where all content is rendered using JavaScript. You can easily update personal details, projects, and skills by modifying the files in the `data` folder. The website’s styling is managed in the `styles` folder.

---

## 📂 Directory Structure

### 📁 data
- **about-data.js** → Contains information for the "About" section  
- **personal-data.js** → Stores personal information  
- **projects-data.js** → Holds project details  
- **skills-tools-data.js** → Lists skills and tools  

### 📁 images-and-icons
- 📂 **icons/** → Contains icons used across the website  
- 📂 **images/** → Stores general images  

### 📁 script
- **animations.js** → Controls animations and motion effects  
- **email-sender.js** → Handles email functionality  
- **main.js** → Core JavaScript file for rendering and website behavior  
- **render-contents.js** → Dynamically loads content from the `data` folder  

### 📁 styles
- 📂 **sections-style/** → Contains styles for specific sections:  
  - **about-section.css** → Styles for the About section  
  - **contact-section.css** → Styles for the Contact section  
  - **home-section.css** → Styles for the Home section  
  - **projects-section.css** → Styles for the Projects section  
  - **skills-section.css** → Styles for the Skills section  
- **background.css** → Background-related styles  
- **footer.css** → Styles for the footer  
- **global.css** → Global styles across the website  
- **header.css** → Styles for the header section  
- **navigation.css** → Navigation menu styles  
- **normalize.css** → CSS normalization for consistent rendering  

### 📄 Other Files
- **LICENCE.txt** → Project license information  
- **meowish-resume.pdf** → Resume file  
- **page.html** → Main HTML file of the website  
- **SETUP.md** → Setup and project information  

---

## 🔧 How to Update Content

### 📌 Modify Data
1. Navigate to the `data` folder.  
2. Edit the relevant JavaScript files:  
   - `personal-data.js` → Update personal details.  
   - `projects-data.js` → Modify or add project information.  
   - `about-data.js` → Change About section content.  
   - `skills-tools-data.js` → Update skills and tools listed.  
3. Your changes will reflect automatically as the content is dynamically loaded by `render-contents.js`.

### 🎨 Update Styles
1. Go to the `styles` folder.  
2. Modify the respective CSS files to update design, animations, or layout.

💡 **Note:** Keep the structure of JavaScript objects consistent to avoid rendering issues. Do not delete `render-contents.js` unless you redesign the content loading process.

---

## 🚀 Hosting the Website
You can easily host your website using GitHub Pages, Netlify, Vercel, or other static hosting services.

📌 Watch the tutorial here 👉 [Easy Way to Host Your Website](https://youtu.be/3e_FVE4piEM?si=Zs3fJf6QOZm2LnBW)

---

## 📩 Contact Me
Need help? Feel free to reach out!  
📧 Email: **puyongharvey@gmail.com**

Happy coding! 🚀✨

