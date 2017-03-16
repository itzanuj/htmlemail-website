---
layout: post
title:  "How to use custom HTML email templates with MoonMail"
description: Learn how to set up MoonMail campaigns to use your custom responsive HTML email templates
tags: tutorial, moonmail
---

Congratulations! You've just downloaded your set of [responsive HTML email templates](http://htmlemail.io) and are ready to start sending professional looking emails from your ESP (Email Service Provider). Now you need to put them into MoonMail so you can use them.

[MoonMail](https://moonmail.io/?utm_source=htmlemail&utm_medium=website) is a great light weight email marketing tool built on top of AWS. Create templates, manage lists and send campaigns. They have a free plan for 7,500 emails per month and their paid plan is $9.99 per month (use code **HTMLemail30** to get 30% off for the first 3 months).

With MoonMail you can add custom HTML to use for your email campaigns.

### How to use custom email templates for MoonMail campaigns

* Open your MoonMail dashboard
* Go to `Campaigns`
* Create a new campaign
* Click on `Edit code` to switch to HTML mode
* Paste in your (inlined) code
* Make sure your images are hosted on a CDN and their absolute paths are included
* Send campaign

Lets look at some of these in more detail.

#### Copying and editing code

Open your email template in your editor of choice so you can see the code. 

Before you copy it in to MoonMail you'll probably want to edit the content in your editor.

* Remove any HTMLemail.io imagery and branding
* Add in your own logo
* Add in your own content
* Add in your own imagery
* Update any social links and links to your website

<figure class="blog--image">
  <img src="/img/moonmail.png" alt="MoonMail" width="500">
</figure>

#### Working with images

Remember your images (including your logo) need to be hosted somewhere in order to work properly when users open your emails.

I recommend using a CDN tool like [AWS Cloudfront](https://aws.amazon.com/cloudfront/) or [Cloudinary](http://cloudinary.com/) to host your images.

Then swap out any relative paths to images with the absolute paths e.g. instead of `/img/logo.png` use `http://something.cloudfront.net/images/logo.png`

#### Update the content to include MoonMail tags

Add the unsubscribe url to the unsubscribe link.

```html
Don't like these emails? <a href="{% raw %}{{ unsubscribe_url }}{% endraw %}" style="text-decoration: underline; color: #999999; font-size: 12px; text-align: center;">Unsubscribe</a>
```

You can also make use of other [MoonMail tags](http://support.moonmail.io/the-platform/campaigns/using-personalization-tags) like {% raw %}{{recipient_email}}{% endraw %} and {% raw %}{{name}}{% endraw %} to help you personalize the content.

#### 30% Off for HTMLemail.io readers

Use discount code **HTMLemail30** to get 30% off for the first 3 months using [MoonMail](https://moonmail.io/?utm_source=htmlemail&utm_medium=website).

### Further reading

* [MoonMail: Creating Custom Templates](http://support.moonmail.io/the-platform/campaigns/creating-custom-templates)
* [MoonMail: Using Personalization Tags](http://support.moonmail.io/the-platform/campaigns/using-personalization-tags)


