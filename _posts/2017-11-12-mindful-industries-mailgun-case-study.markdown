---
layout: post
title:  "How Mindful Industries use HTML email templates to send transactional emails with Mailgun"
description: Case study of how Mindful Industries are using html email templates. They are an artificial intelligence company and send thousands of emails every month with Mailgun.
tags: case-study, mailgun, customer
category: customer
featured: true
thumbnail: "blog-mindful.jpg"
---

<a href="https://uploadme.ai" target="_blank">Mindful Industries</a> are an artificial intelligence company. They've created an AI ever-living (immortal) doppelgänger of real humans and are **sending tens of thousands of emails a month with Mailgun**.

Here we speak with their **Founder, Jan Kremlacek**, about how they used <a href="https://htmlemail.io#templates">HTML Email templates</a> to create an email library and then embeded it in their codebase.

<blockquote>
  <img src="{{ site.url }}/img/mindful-jan.jpg" alt="Jan Kremlacek" class="blockquote-avatar">
  <p>&ldquo;...we plugged all the new HTML templates into our design and codebase in less than 1 day&rdquo;</p>
  <cite>&mdash; Jan Kremlacek, Founder</cite>
</blockquote>

### What was the challenge you were facing?

The main challenge was effort to have a **standardized internal library** to deliver transactional emails with our design. Let me
be more clear, we weren't so much concerned about the design (as "keep it simple" works for us), but **we wanted a coherent library** do serve emails **without spending months in development**.

<figure class="blog--image">
  <img src="{{ site.url }}/img/mindful1.jpg" alt="Mindful Industries transactional email" width="400">
  <figcaption>Transactional emails are sent through Mailgun.</figcaption>
</figure>

Another important aspect for us was an ability to inline HTML emails on our side and to **keep the code clean and maintainable** for future use. And of course we wanted code which **works across email clients**.

### How did HTML Email templates help solve this problem?

Your templates helped us a lot! We took the basic one, then **used your knowledge of how to structure HTML email**, which CSS inlining works and which not, and created our own simple components (like the skeleton, buttons, tables, etc.) to fit our design and code work flow. 

<figure class="blog--image">
  <img src="{{ site.url }}/img/mindful2.jpg" alt="Mindful Industries transactional email" width="400">
  <figcaption>Transactional emails are sent through Mailgun.</figcaption>
</figure>

These components are mostly just pieces of what you did + **SCSS variables** to fit our styling. The brilliance of your work was the fact that we made and plugged all the new HTML templates into our design and codebase in **less than 1 day**.

### What were the results?

In less than **1 day** we were able to establish **fully working HTML email** in our own design fitting our own development process.

It works as now we develop without any maintenance or additional code. In other words, **it works perfectly**. We've had no bug reports from
our customers about the HTML emails functionality.

### Transaction email templates

If you need to get professional looking transactional emails up and running with clean code today, take a look at our templates.

* [Alert Notifications](/templates/alert-warning)
* [Password Reset](/templates/password-reset)
* [Welome Emails](/templates/welcome)

### Other case studies

* [How LightReports use Postmark to send weekly email reports](/blog/light-reports-postmark-case-study)

### Further reading

* [Mindful Industries: Create your AI ever-living doppelgänger ](https://uploadme.ai)

