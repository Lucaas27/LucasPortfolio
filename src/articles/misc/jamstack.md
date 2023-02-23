---
title: JAMStack
author: Lucas Gomes
date: 2023-02-21
tags: "misc"
categories: "misc"
description: misc
---

## Definition

"Jamstack" was originally cased as "JAMstack" where "JAM" stood for JavaScript, API & Markup.

> "A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup"

![Pasted image 20230121195533.png](Pasted%20image%2020230121195533.png)

### JavaScript

Dynamic functionalities are handled by JavaScript. There is no restriction on which framework or library you must use.

#### APIs

Server side operations are abstracted into reusable APIs and accessed over HTTPS with JavaScript. These can be third party services or your custom function.

#### Markup

Websites are served as static HTML files. These can be generated from source files, such as Markdown, using a Static Site Generator.

---

## MEANING

Today, Jamstack is used to more broadly refer to an architectural approach for building websites. Though there are varying opinions on what exactly Jamstack means today, these attributes are present in most sites that claim to be Jamstack sites:

#### Decoupled

The front end uses tooling separate from the back end. The front end is typically built using a static site generator. And the back end is often integrated with the front through the use of APIs used during the build process. Server-side processes can also be run using serverless functions.

#### Static-first

While various practices exist for introducing dynamic elements to Jamstack sites, most are pre-rendered, which means the front end was built and compiled into HTML, CSS, and JavaScript files.

#### Progressively enhanced

JavaScript can be introduced to pre-rendered sites on an as-needed basis, thus increasing performance in the browser.

---

## BENEFITS

Here are the main benefits provided by the Jamstack.

#### Faster performance

Serve pre-built markup and assets over a CDN.

#### More secure

No need to worry about server or database vulnerabilities.

#### Less expensive

Hosting of static files is cheap or [even free.](https://www.netlify.com/)

#### Better developer experience

Front end developers can focus on the front end, without being tied to a monolithic architecture. This usually means quicker and more focused development.

#### Scalability

If your product suddenly goes viral and has many active users, the CDN seamlessly compensates.

---

## BEST PRACTICES

The following tips will help you leverage the best out of the stack.

#### Content delivery network

Since all the markup and assets are pre-built, they can be served via CDN. This provides better performance and easier scalability.

[Learn more](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/ "Read more about CDN")

#### Atomic deploys

Each deploy is a full snapshot of the site. This helps guarantee a consistent version of the site globally.

[Learn more](https://buddy.works/blog/introducing-atomic-deployments#what-are-atomic-deployments "Read more about atomic deploys")

#### Cache invalidation

Once your build is uploaded, the CDN invalidates its cache. This means that your new build is live in an instant.

[Learn more](https://www.netlify.com/blog/2015/09/11/instant-cache-invalidation/ "Read more about cache invalidation")

#### Everything in version control

Your codebase lives in version control system, such as Git. The main benefits are changing the history of every file, collaborators and traceability.

[Learn more](https://www.atlassian.com/git/tutorials/what-is-version-control "Read more about version control")

#### Automated builds

Your server is notified when a new build is required, typically via webhooks. Server builds the project, updates the CDNs and the site is live.

[Learn more](https://www.agilealliance.org/glossary/automated-build "Read more about automated builds")

---

## WORKFLOW

Here's an ideal Jamstack workflow:

![Pasted image 20230121194831.png](Pasted%20image%2020230121194831.png)

---

## DEVELOPMENT

However you decide to generate your HTML assets is up to you. The three most common approaches are:

#### Hand coding

Simple and effective method of writing HTML, it's ideal for super simple pages.

#### Static Site Generators

Most Jamstack sites are powered by a static site generator. There's no enforcement on which SSG you decide to use.

- [Next.js](https://nextjs.org/ "Next.js")

- [Gatsby](https://www.gatsbyjs.com/ "Gatsby")

- [Hugo](https://gohugo.io/ "Hugo")

- [Eleventy](https://www.11ty.dev/)

[See more SSGs](https://jamstack.org/generators/)

#### Site Builders

Tools that bring Jamstack to less technical users, while enabling developers to customize sites through modern tooling.

- [Stackbit](https://www.stackbit.com/ "Stackbit")

- [Builder.io](https://www.builder.io/ "Builder.io")

- [CloudCannon](https://cloudcannon.com/ "CloudCannon")

---

## DEPLOYMENT

Your built site needs to be hosted somewhere. There are great services that provide this for free and with ease.

- [Netlify](https://www.netlify.com/ "Netlify")

- [Vercel](https://vercel.com/ "Vercel")

- [Github Pages](https://pages.github.com/ "Github Pages")

- [Digital Ocean](https://www.digitalocean.com/ "Digital Ocean")

- [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/ "Azure Static Web Apps")

[See more deployment services](https://www.tnd.dev/tools/hosting-deployment/)

---

## DYNAMIC PARTS

Jamstack websites don't have to be static. There are great services available to help bring some dynamic data to your product.

#### Custom functions

You can also abstract your own functions into reusable APIs.

- [AWS lambda functions](https://aws.amazon.com/lambda/features/ "AWS lambda functions")

- [Netlify Functions](https://functions.netlify.com/examples/ "Netlify Functions")

#### Custom data

As you add features to your site, you may want to store user profiles, shopping cart data, game levels, or other dynamic data. There are many DBaaS (database as a service) tools out there today.

- [Fauna](https://fauna.com/ "Fauna")

- [Hasura](https://hasura.io/ "Hasura")

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas "MongoDB Atlas")

- [AWS DynamoDB](https://aws.amazon.com/dynamodb/ "AWS DynamoDB")

#### Comments

Many Jamstack products have dynamic comment sections. These are typically used on blogs.

- [Staticman](https://github.com/eduardoboucas/staticman "Staticman")

- [Disqus](https://disqus.com/ "Disqus")

#### Forms

A great way to interact with your audience. Tools like Netlify support this by default, though there are other form-based services.

- [Netlify Forms](https://www.netlify.com/products/forms/ "Netlify Forms")

- [Getform](https://getform.io/ "Getform")

- [FormKeep](https://formkeep.com/ "FormKeep")

#### E-Commerce

Setting up an online store on the Jamstack has never been easier.

- [Shopify](https://www.shopify.com/plus/solutions/headless-commerce "Shopify")

- [Snipcart](https://snipcart.com/ "Snipcart")

- [Commerce Layer](https://commercelayer.io/ "Commerce Layer")

#### Search

Rely on third party services to integrate a search functionality.

- [Algolia](https://www.algolia.com/ "Algolia")

- [fuse.js](https://fusejs.io/ "fuse.js")

- [Lunr.js](https://lunrjs.com/ "Lunr.js")

[See more static services](https://github.com/agarrharr/awesome-static-website-services)

## CMS

Jamstack sites can also be controlled via a Content Management System, these are typically known as Headless CMS. Once a change in the CMS is made, a new build of your site will be triggered and then deployed as static assets.

- [Netlify CMS](https://www.netlifycms.org/ "Netlify CMS")

- [Contentful](https://www.contentful.com/ "Contentful")

- [Headless WordPress](https://developer.wordpress.org/rest-api/ "Headless WordPress")

- [Ghost](https://ghost.org/docs/content-api/ "Ghost")

- [Strapi](https://strapi.io/ "Strapi")

- [Forestry](https://forestry.io/ "Forestry")

- [Sanity.io](https://www.sanity.io/ "Sanity")

- [Kontent](https://kontent.ai/ "Kontent")

- [GraphCMS](https://graphcms.com/ "GraphCMS")

- [TakeShape](https://www.takeshape.io/ "TakeShape")

[See more CMS services](https://jamstack.org/headless-cms/)
