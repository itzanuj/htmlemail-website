---
layout: post
title:  "How to use custom HTML email templates with Sendgrid"
description: Learn how to set up Sendgrid to use your custom responsive HTML email templates
tags: tutorial, sendgrid
---

<figure class="blog--image">
  <img src="/img/sendgrid.gif" alt="Sendgrid" width="200">
</figure>

Congratulations! You've just downloaded your set of [responsive HTML email templates](http://htmlemail.io) and are ready to start sending professional looking emails from your ESP (Email Service Provider). Now you need to put them into Sendgrid so you can use them.

[Sendgrid](https://sendgrid.com) is a great developer solution for an ESP and includes features for sending marketing campaigns, transactional emails and tracking deliverability.

With Sendgrid you can either store your HTML as a reusable template or you can send it as part of your API request.

### How to use custom email templates for Sengrid transactional emails

* Open your Sendgrid dashboard
* Go to `Templates` > `Transactional`
* Create a new template and give it a memorable name
* Add a new version of that template
* Select the `Code Editor` option
* Copy over the *inlined* version of the template you want to use
* Replace the unsubscribe url with the Sendgrid tag `<%asm_group_unsubscribe_raw_url%>`
* Update your placeholder content with Sendgrid [sub tags](https://sendgrid.com/docs/API_Reference/SMTP_API/substitution_tags.html) e.g. `<%body-text-goes-here%>` or `<%alertText%>`
* Send a test to yourself
* Call this template's ID when using the API


Lets look at some of these in more detail.

#### Create a template and copy the code across

Open your email template in your editor of choice so you can see the code. Select all, copy, then paste into Sendgrid. Here I've copied across the inlined receipt email code.

<figure class="blog--image">
  <img src="/img/sendgrid-create.jpg" alt="Create HTML email template" width="500">
</figure>

<figure class="blog--image">
  <img src="/img/sendgrid-copy.jpg" alt="Copy code" width="600">
</figure>

#### Update the placeholder content with Sendgrid sub tags

So that you can use this template, Sendgrid needs to know where you want to place the variables and content that you send with your API call.

First, replace the unsubscribe link with the `<%asm_group_unsubscribe_raw_url%>` tag like so:

```html
Don't like these emails? <a href="<%asm_group_unsubscribe_raw_url%>" style="text-decoration: underline; color: #999999; font-size: 12px; text-align: center;">Unsubscribe</a>
```

Then put Sendgrid sub tags where you want the content e.g. in the receipt email below you can see I've placed tags like `<%item%>` and `<%price%>`

<figure class="blog--image">
  <img src="/img/sendgrid-tags.jpg" alt="Sub tags" width="600">
</figure>

#### Don't forget about preheader text

As it is not visible it is easy to forget but you should also be replacing preheader text with a sub tag and sending preheader text with each request.

```html
<span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"><%preheader%></span>
```

#### Using images

Sendgrid offers a handy image upload manager so you can upload your template images and reference them. They then do the hosting for you so no need to worry about an external CDN.

<figure class="blog--image">
  <img src="/img/sendgrid-upload.jpg" alt="Upload images" width="600">
</figure>

#### Start sending

That should be you ready to go. When you make your [API call](https://sendgrid.com/docs/API_Reference/Web_API_v3/Transactional_Templates/smtpapi.html) to Sendgrid, include the ID of the template and provide it with the necessary [sub tags](https://sendgrid.com/docs/API_Reference/SMTP_API/substitution_tags.html) it needs to render.

```bash
{
  "to": [
    "hello@htmlemail.io"
  ],
  "sub": {
    ":name": [
      "Lee"
    ],
    ":item": [
      "Monthly Subscription"
    ],
    ":price": [
      "$20"
    ]
  },
  "filters": {
    "templates": {
      "settings": {
        "enable": 1,
        "template_id": "fa2ef42e-f70b-4951-a671-cf3b53b01123"
      }
    }
  }
}
```

### Further reading

* [Sendgrid: Create and edit templates](https://sendgrid.com/docs/User_Guide/Transactional_Templates/create_edit.html)
* [Sendgrid: Templates API docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/Transactional_Templates/index.html)


