---
layout: post
title:  "How to customize your Shopify email templates"
description: Step by step tutorial on customizing your Shopify emails to they use your own branded and designed HTML email templates.
tags: tutorial, shopify, esp
---

<figure class="blog--image">
  <img src="{{ site.url }}/img/shopify-logo.png" alt="Shopify" width="200">
</figure>

In this article we will learn how to use custom HTML email templates with [Shopify](https://www.shopify.com/). 

When you set up a Shopify store they automatically send a handful of emails out of the box for **orders, shipping, customer support and notifications**. The default email templates that Shopify provide look pretty good. Although there are a number of reasons you're going to want to customize these.

1. To match your **brand**
2. To be **consistent with other emails** you're sending from other ESPs
3. To improve the **design and UX** of the default templates
4. To **customize the content** that is displayed in the emails
5. To take advantage of **marketing or conversion opportunities** in these transactional emails 

### How to use custom HTML email templates for Shopify emailing

You've just got yourself some new [HTML email templates](http://htmlemail.io/#templates). You're going to use templates that have [inlined CSS](/inline) so you know they work across all major email clients. They contain some images like your logo or social media icons.

#### 1. Choose an email template to edit

* Go to `Settings` -> `Notifications`
* Click on the email you want to modify, lets do `Order confirmation` as an example
* Copy/paste the HTML into your favorite code editor - you can also edit it here in the browser if you prefer but I recommend using your editor
* Open up your new [email template](/templates/receipt) (lets use `receipt-inlined.html` as an example) in your favorite editor as well so you have this side by side with the Shopify template for reference

<figure class="blog--image">
  <img src="{{ site.url }}/img/shopify-1.jpg" alt="Shopify notifications" width="600">
</figure>

<figure class="blog--image">
  <img src="{{ site.url }}/img/shopify-2.jpg" alt="Shopify notification templates" width="600">
</figure>

#### 2. Upload the files that you need

Shopify provides a files feature where you can upload images. This is your CDN and where all your files will be hosted.

* Upload your logo
* Upload your social media icons
* Upload any other images you want to include in your templates
* Open your new email receipt template and replace any image references with the Shopify URLs
* e.g. `img/logo.png` becomes something like `//cdn.shopify.com/files/1234/logo.png`

<figure class="blog--image">
  <img src="{{ site.url }}/img/shopify-3.jpg" alt="Shopify files CDN" width="600">
</figure>

<figure class="blog--image">
  <img src="{{ site.url }}/img/shopify-4.jpg" alt="Upload files" width="600">
</figure>

#### 3. Customize your template and insert the Shopify liquid variables into your template

This is going to be the bulk of the task. Referencing the original Shopify template you're going to **copy/paste the various liquid variables** and logic over to your new email template.

* Change preheader text
* Remove unsubscribe link
* Update social icon links
* Update content
* Replace all the user and shop specific variables with liquid variables e.g. `{% raw %}{{ order_name }}{% endraw %}`
* Use a `for` statement for your list of items `{% raw %}{% for line in line_items %}{% endraw %}`

<figure class="blog--image">
  <img src="{{ site.url }}/img/shopify-5.jpg" alt="Email code editor" width="600">
</figure>

Here are some code samples.

```html
{% raw %}
{% for line in line_items %}
<tr>
  <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-bottom: 1px solid #eee; margin: 0; padding: 5px;" valign="top">{{ line.product.title }}</td>
  <td class="receipt-figure" style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-bottom: 1px solid #eee; margin: 0; padding: 5px; text-align: right;" valign="top" align="right">{{ line.line_price | money }}</td>
</tr>
{% endfor %}
{% endraw %}
```

```html
{% raw %}
{% for line in tax_lines %}
<tr class="receipt-subtle" style="color: #aaa;">
  <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-bottom: 1px solid #eee; margin: 0; padding: 5px;" valign="top">{{ line.title }}</td>
  <td class="receipt-figure" style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-bottom: 1px solid #eee; margin: 0; padding: 5px; text-align: right;" valign="top" align="right">{{ line.price | money }}</td>
</tr>
{% endfor %}
{% endraw %}
```

Some [liquid variables](https://help.shopify.com/manual/sell-online/notifications/email-variables) you might want to use.

* `{% raw %}{{ order_name }}{% endraw %}`
* `{% raw %}{{ shop.url }}{% endraw %}`
* `{% raw %}{{ line.image }}{% endraw %}`
* `{% raw %}{{ line.quantity }}{% endraw %}`
* `{% raw %}{{ discount_title }}{% endraw %}`
* `{% raw %}{{ subtotal_price }}{% endraw %}`
* `{% raw %}{{ stotal_price | money_with_currency }}{% endraw %}`
* `{% raw %}{{ shipping_address | format_address }}{% endraw %}`
* `{% raw %}{{ shop.email }}{% endraw %}`
* `{% raw %}{{ transaction.payment_details.credit_card_last_four_digits }}{% endraw %}`

#### 4. Copy across your email template into Shopify

At this point copy/paste your email template code over to Shopify.

Like I mentioned before, you can edit the HTML in the Shopify form, although I have found it much easier to manage this outside of Shopify using my own editor.

<figure class="blog--image">
  <img src="{{ site.url }}/img/shopify-6.jpg" alt="Copy/paste code" width="600">
</figure>

#### 5. Test your Shopify emails

Shopify provides two testing methods. Preview in the browser and email yourself. Try both until it looks good.

<figure class="blog--image">
  <img src="{{ site.url }}/img/shopify-7.jpg" alt="Test and preview email template" width="600">
</figure>

<figure class="blog--image">
  <img src="{{ site.url }}/img/shopify-8.jpg" alt="Test and preview email template" width="600">
</figure>

### Further reading

* [GitHub: Shopify default email notification templates](https://github.com/leemunroe/shopify-email-templates)
* [Shopify: Edit notification templates](https://help.shopify.com/manual/sell-online/notifications/edit-template)
* [Shopify: Notification variables](https://help.shopify.com/manual/sell-online/notifications/email-variables)


### Other email service template tutorials

* [Mailchimp](https://htmlemail.io/blog/custom-mailchimp-templates)
* [Customer.io](https://htmlemail.io/blog/custom-customerio-templates)
* [SendGrid](https://htmlemail.io/blog/custom-sendgrid-templates)
