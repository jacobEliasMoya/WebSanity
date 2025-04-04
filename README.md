# WebSanity - React & Tailwind Website Template

WebSanity is a modern, fully responsive website template built using **React**, **Tailwind CSS**, and **Redux**, powered by **Sanity.io** as the headless CMS. This template provides a streamlined and scalable approach to managing website content dynamically.

## Features

- ⚡ **Fast & Responsive** - Optimized for performance and mobile-friendly.
- 🎨 **Tailwind CSS** - Utility-first styling for flexibility and speed.
- ⚙ **Redux for State Management** - Efficient state handling for seamless UI updates.
- 📝 **Sanity.io CMS** - Easily manage and update content dynamically.
- 🔄 **Reusable Components** - Modular and maintainable architecture.
- 🌍 **SEO Optimized** - Ensuring better visibility on search engines.

## Getting Started

### Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli)

### Installation

Clone the repository:
```sh
git clone https://github.com/jacobEliasMoya/WebSanity.git
cd WebSanity
```

Install dependencies:
```sh
npm install  # or yarn install
```

Set up your Sanity.io project:
```sh
sanity init
```
Follow the prompts to create or link an existing Sanity project.

### Running the Development Server

```sh
npm run dev  # or yarn dev
```

This will start the local development server, usually at `http://localhost:3000/`.

## Deployment

You can deploy this project using platforms like **Vercel**, **Netlify**, or **Cloudflare Pages**. Before deployment, ensure your Sanity dataset is publicly accessible or properly authenticated.

## Configuration

### Environment Variables
Create a `.env.local` file and set up the following variables:
```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

## Contributing
Pull requests are welcome! Feel free to submit improvements or fixes.

## Contact
For inquiries, visit **[jacobmoya.com](https://jacobmoya.com/)** or reach out via GitHub Issues.

---

### License
This project is licensed under the **MIT License**.

