<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  하영의 블로그
</h1>

[하영의 블로그입니다](https://ha-young.github.io/static/8e424d905a882bb161a9f0cc92b57896/905ea/profile.png)

# 작업 할 것

- [ ] 페이지네이션
- [ ] 어바웃페이지 클릭유도
- [ ] 모달 제자리에 뜨도록하기
- [ ] 어바웃페이지 <나는 이런사람 입니다> - 기본기를 중요시, 사람을 좋아함, 튀지않음, 대화를 좋아함, 매일 성장하고싶어함, 책임감 투철, 사람에 대해 분석하고 맞춰가는 걸 잘함, 빠른 수용
- [ ] 어바웃페이지 <나는 이런 회사를 선호합니다> - 애정을 가지고 일 할 수 있는 회사, 일하는 보람이 나는 회사, 주인의식을 가질 수 있는 회사
- [ ] 어바웃페이지 <나는 이런 팀을 선호합니다> - 함께 발전, 커뮤니케이션 원활, 협업의 중요성을 아는, JD가 명확한, 하는일이 무엇인지 정확하게 알려주는,

# 포스팅 할 것

## Daily

- [ ] 8월의 생각

## Question

- [ ] 나는 어떤 개발자가 되어야 할까?

## 기술 블로그

### 알고리즘

### 머신러닝

### C++

### JavaScript

### React

###

## 📚 Features:

- Landingpage
- Blog overview page
- Markdown sourcing from /content folder
- Estimated reading time for each post
- Styled components with emotion
- Netlify deployment friendly
- Nunito font included as npm module
- Syntax highlighting with prismjs
- Textmarkerstyle headings inspired by Basecamp
- Site meta tags with React Helmet
- Plugins for offline support
- Draft blog posts not published

## 👨🏻‍💻 Customization

Create new pages like an About page in the `/pages` directory.
The minimum code is:

```js
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageName = () => (
  <Layout>
    <SEO title="PageName" keywords={[`gatsby`, `application`, `react`]} />
    //CONTENT HERE
  </Layout>
)

export default PageName
```

To change the name on the landing page please modify the `title` in `gatsby-config.js`

The Nunito typeface is included as a npm module in `gatsby-browser.js` and in `/components/layout.css`

---

This Gatsby starter is built on top of the official [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default). You can find a quick start guide in the following lines. There are the most important files explained.

## 🚀 Quick start

This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the julia starter.

    ```sh
    # create a new Gatsby site using the julia starter
    gatsby new julia-starter https://github.com/niklasmtj/gatsby-starter-julia
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd julia-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `julia-starter` directory in your code editor of choice and edit `src/pages/index.js` or `src/pages/blog.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”. A short description of what you can find there is below.👨🏻‍💻

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser. For example is the **Nunito** typeface imported here.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

### The src directory

    .
    ├── components
    ├── content
    ├── images
    ├── pages
    └── templates

1. **`/components`**: Your React components can be defined here. You can include them from there in your pages.

2. **`/content`**: The filesystem plugin is configured to get the `*.md` files from here. These will be published on the `/blog` page.

3. **`/images`**: This directory is the home for your images that you can query via GraphQL since the filesystem plugin publish them there.

4. **`/pages`**: Here is where your pages like `/blog`, `/about` and also the 404 page lives. An example of the basic structure can be found above.

5. **`/templates`**: You will find the `blog-post.js` template there which defines how every blog-post page is structured.

## 🎓 Learning Gatsby

Looking for more guidance? The perfect place to learn more about GatsbyJS is the [website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

You can also directly deploy this starter via Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/niklasmtj/gatsby-starter-julia)

<!-- AUTO-GENERATED-CONTENT:END -->
