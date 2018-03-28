---
layout: post
title:  "How to use custom HTML email templates with MailerLite"
description: Learn how to set up MailerLite to use your custom responsive HTML email templates.
tags: tutorial, mailerlite, esp
category: integration
featured: true
thumbnail: "blog-mailerlite.jpg"
---

[MailerLite](https://www.mailerlite.com) is an email marketing service provider with a focus on simplicity, excellent customer support and beautiful pre-built designs. 

MailerLite helps customers create professional email campaigns with a powerful yet easy-to-use content editor, subscriber management tools and campaign reports highlighting the most important metrics.

### Importing Your Template

MailerLite offers 3 design editors to use for email marketing:

1. Drag & Drop Editor
2. Rich Text Editor
3. HTML Editor

For importing and editing custom templates, you will be using the HTML editor. There are several ways you can import your template in MailerLite.

1. Import from URL - create a campaign by importing the HTML code directly from a hosted URL.
2. Paste in code - create a campaign by pasting your custom coded design.
3. Import from ZIP - create a campaign by uploading a zip file that contains the HTML code.

Let’s choose **Import from ZIP**. It’s very convenient for including the CSS and image assets. Furthermore, all images imported from Zip or URL will be automatically saved in the [File Manager](https://blog.mailerlite.com/file-manager-upload-save-and-reuse-your-images/).

Before we start, let’s zip up the template(s) you want to use.

1. Select the files you want to zip, which should include:
  * Non-inlined HTML template e.g. `newsletter.html`
  * `main.css` stylesheet
  * `/img` directory
2. Compress or zip these files into one zip file.
3. Rename the file so you know what it is.

<figure class="blog--image">
  <img src="{{ site.url }}/img/mailerlite-compress.gif" alt="Zip MailerLite templates" width="500">
</figure>

### How To Use A Custom Template In A Campaign

#### 1. Create A New Campaign

* Open your MailerLite dashboard
* Go to `Campaigns` > `Create Campaign`
* Select the type of campaign to send e.g. `Regular Campaign`
* Enter your campaign information

#### 2. Upload Your Email Template

When asked to select an editor:

* Choose `Your own HTML` > `Import from zip`
* Select your zip file that includes the template
* Wait for it to upload

<figure class="blog--image">
  <img src="{{ site.url }}/img/mailerlite-upload.gif" alt="Upload MailerLite templates" width="500">
</figure>

#### 3. Edit Your Template

Now you can make changes to your template. In the **Code** tab you can edit the content within your template — change headings, preheader, body text, links and images. The changes you make in HTML code can be immediately seen on the preview on your left hand side.

In the **Tags** tab you’ll find a list of merge tags that you can use to personalize your emails.

Use the **Settings** tab to automatically add a footer to the bottom of your email with an unsubscribe link, and any other elements that are required to comply with CAN Spam laws.

Note that some email clients strip out CSS in `<style>` blocks. Using **Automatic CSS Inliner** will apply all of your CSS (except media queries) as inline styles.

Another cool feature is the option to toggle images On/Off to preview ALT text and optimize your email for image blocking. MailerLite offers a **File Manager** feature allowing you to upload your template images and reference them. MailerLite handles the hosting so you never need to worry about an external CDN.

Finally, you can click the mobile icon to see how your template will look on mobile devices.

#### 4. Send Your Campaign

MailerLite’s HTML code editor saves your changes automatically. You can also save changes manually with a keyboard shortcut (CMD+S for Macs, CTRL+S for Windows) or just by clicking **Save** button.

Once you’re happy with your changes, click **Done Editing** button. You will then see the **Recipients** window where you can select your audience.

Click **Review and Confirm** once selected. Before you launch your campaign, send a test email to yourself and check how it looks. If everything is great, click Schedule button to schedule and send it.

<figure class="blog--image">
  <img src="{{ site.url }}/img/mailerlite-send.gif" alt="Send MailerLite email" width="500">
</figure>

### Further reading

* [MailerLite: Using your own HTML design](https://blog.mailerlite.com/using-your-own-html-design/)
* [MailerLite: API documentation](https://developers.mailerlite.com/reference)

### Other email service template tutorials

* [Mailchimp](https://htmlemail.io/blog/custom-mailchimp-templates)
* [SendGrid](https://htmlemail.io/blog/custom-sendgrid-templates)
* [Customer.io](https://htmlemail.io/blog/custom-customerio-templates)
