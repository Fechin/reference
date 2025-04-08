---
title: Django
date: 2024-05-15 10:12:25
background: bg-[#214a35]
label: Python
tags:
  - python
  - web
categories:
  - Programming
intro: |
  A Django cheat sheet.
plugins:
  - copyCode
---

## Getting Started

### Start a new Django Project

{.row-span-2}

```python
# Create et access project folder
~$  mkdir project_name
~$  cd project_name

# Create Python virtual env
~$  python3 -m venv venv

# Activate virtual env
~$  source venv/bin/activate

# If you want to deactivate virtual env
~$  deactivate

# Install django (~= same as 4.2.*)
~$  pip install django~=4.2.0

# New django project (from project_name folder)
~$  django-admin startproject config

# Create app (from project_name folder)
~$  python manage.py startapp app_name
```

### Migration:

<small>Django create a database table for each models present in your app using those commands:</small>

Makemigrations: Create a file under app_name/migrations with the database structure to create

```python
~$  python manage.py makemigrations
```

Migrate: Will read the migrations files and create the actual database and tables

```python
~$  python manage.py migrate
```

### Create superuser for authenficiation/admin panel

```python
~$  python manage.py createsuperuser
```

### Start server

```python
~$  python manage.py runserver  => ex.  http://127.0.0.1:8000
```

### Requirements

```python
# Create a requirements file that contain all your project dependencies
~$  pip freeze > requirements.txt

# Install your project requirements (if a requirements file exist)
~$  pip install -r requirements.txt
```

### Other commands

```python
# Django shell (Run project code directly)
~$ python manage.py shell

# example of code to run in the shell:
 >>> from app_name.models import User
 >>> user1 = User.objects.first()

# Prepare static folders for production
~$ python manage.py collectstatic

# Take all data from app blog and export in json
~$ python manage.py dumpdata blog > myapp.json

# Take all data in json file and import in app data table
~$ python manage.py loaddata myapp.json

# To Create or Update a message file for Translation, run this command
~$ django-admin makemessages -l de
# Updating message files
~$ django-admin compilemessages
```

## Project config {.cols-1}

### Configuration settings

##### Project base templates directory and Apps templates directory:

- create folder project/templates
- create folder appfolder/templates/appname

##### Create Static folder in base root and separate for apps:

- project_name\static\root
- app_name\static\app_name

```python
# Add app to settings.py
INSTALLED_APPS = [
         … ,
         'app_name.apps.App_nameConfig',
 ]

# template directory config
Project templates settings.py:
    TEMPLATES = [
        { …
           'DIRS': [BASE_DIR / 'templates'],
        … }

# Static folder:
STATIC_URL = '/static/'
STATICFILES_DIRS = [ BASE_DIR / 'static' ]
STATIC_ROOT = 'static_root'
# Media folder:
MEDIA_URL = '/media/'
STATICFILES_DIRS = (
    (BASE_DIR / 'static'),
)
MEDIA_ROOT = BASE_DIR / 'media'

# To use PostgresSQL
# pip install psycopg2
# settings.py
DATABASE = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'blog',
        'USER': 'admin',
        'PASSWORD': '123456',
        'HOST': 'localhost',
        'PORT': '5432'
        }
    }

TIME_INPUT_FORMATS = [
    '%H:%M:%S',     # '14:30:59'
    '%H:%M',        # '14:30'
]

DATE_FORMAT = "Y/M/d"

# locale for Translations
LANGUAGES = [
    ('en', 'English'),
    ('de', 'German'),
]

LOCALE_PATHS = (
    BASE_DIR / 'locale',
)

# CK Editor Configuration
CKEDITOR_UPLOAD_PATH = 'uploads/'
CKEDITOR_RESTRICT_BY_USER = True
CKEDITOR_BROWSE_SHOW_DIRS = True
CKEDITOR_ALLOW_NONIMGE_FILES = True
CKEDITOR_IMAGE_BACKEND = "pillow"
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'full',
    }}

# SSL
# If you have an SSL certificate
SECURE_SSL_REDIRECT = True
# cookies will only be sent via HTTPS connections
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
```

## Data Models

### Create Data Model {.col-span-2}

<small>Theses models can be created as database tables with the migrations commands</small>

```python
# models.py
# The id fields is automaticly created by Django
# for each model that why it's not show below
from django.db import models

class Customer(models.Model)
    name = models.Charfield('Customer', max_length=120)
    age = models.IntegerField()
    note = models.TextField(blank=True, null = True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    credit = models.FloatField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    img = models.ImageField(upload_to ='uploads/')
    # Select Field (return value, display value)
    TYPE_CHOICES = (
        ('Customer', _('Customer')),
        ('Supplier', _('Supplier')),
        ('Student', _('Student')),
    )
    type = models.CharField(choices=TYPE_CHOICES)

    class Meta:
        verbose_name = "Customer"
        verbose_name_plural = "Customers"

    # Model string representation
    def __str__(self):
        return self.name

    # the URL that points to a resource or page on your website
    def get_absolute_url(self):
        return reverse("customer_detail", kwargs={"pk": self.pk})
```

#### We can also use this method to define the ChoiceField value.

```python
  class Customer(models.Model)
    class TypeList(models.IntegerChoices):
        customer = (1, _('Customer'))
        supplier = (2, _('Supplier'))
        student = (3, _('Student'))
    .
    .
    .
    type = models.CharField(choices=TypeList.choices, default=1)
```

#### To access the ChoiceField value in the template, we need to do the following in the template:

- In Django templates you can use the "`get_FOO_display()`" method, that will return the readable alias for the field, where `'FOO'` is the name of the field.
- If the choices are stored in the variable `CHOICES` and the model field storing the selected choice is `'type'` then you can directly use

```html
<!-- Here, X is the model instance -->
{{ X.get_type_display }}

<!-- You can even use this method to display its translation. -->
{% trans X.get_type_display %}
```

#### Relationship between models

```python
# One-to-Many: (use double quotes if the entity is not yet declare) ex. "Supplier"
supplier = models.ForeignKey(Supplier, blank=True, null=True, on_delete=models.CASCADE,related_name="supplierother")

# on_delete can be set to models.CASCADE, models.ST_DEFAULT or models.SET_NULL
# The related_name attribute specifies the name of the reverse relation from the supplier model back to your model

# Many-to-Many:
tags = models.ManyToManyField(Tag, blank=True)

# One to One
User = models.OneToOneField(User, on_delete=models.CASCADE)

# Overwrite save method
def save(self, (*args, **kwargs):
    if not self.slug:
        self.slug = slugify(self.title)
    super().save(*args, **kwargs)
```

## Lookup

### Field Lookups {.col-span-2}

In Django, the `field__lookuptype` syntax is used to perform lookups on fields in queries. The `field` represents the
name of the field you want to perform the lookup on, and `lookuptype` represents the type of lookup you want to perform.

For example, let's say you have a model called `Book` with a field called `title` . You can use the `field__lookuptype`
syntax to perform different types of lookups on the `title` field.

Here are a few examples:

```python

# 1. Exact Match Lookup:
Book.objects.filter(title__exact='Python Tricks')
# 2. Case-insensitive Lookup:
Book.objects.filter(title__iexact='python tricks')
# 3. Contains Lookup:
Book.objects.filter(title__contains='Python')
# 4. Startswith Lookup:
Book.objects.filter(title__startswith='Python')
# 5. Endswith Lookup:
Book.objects.filter(title__endswith='Tricks')
```

### Field Lookups Reference

| Keyword        | Description                                      |
| -------------- | :----------------------------------------------- |
| `contains`     | Contains the phrase                              |
| `icontains`    | Same as contains, but case-insensitive           |
| `date`         | Matches a date                                   |
| `day`          | Matches a date (day of month, 1-31) (for dates)  |
| `endswith`     | Ends with                                        |
| `iendswith`    | Same as endswidth, but case-insensitive          |
| `exact`        | An exact match                                   |
| `iexact`       | Same as exact, but case-insensitive              |
| `in`           | Matches one of the values                        |
| `isnull`       | Matches NULL values                              |
| `gt`           | Greater than                                     |
| `gte`          | Greater than, or equal to                        |
| `hour`         | Matches an hour (for datetimes)                  |
| `lt`           | Less than                                        |
| `lte`          | Less than, or equal to                           |
| `minute`       | Matches a minute (for datetimes)                 |
| `month`        | Matches a month (for dates)                      |
| `quarter`      | Matches a quarter of the year (1-4) (for dates)  |
| `range`        | Match between                                    |
| `regex`        | Matches a regular expression                     |
| `iregex`       | Same as regex, but case-insensitive              |
| `second`       | Matches a second (for datetimes)                 |
| `startswith`   | Starts with                                      |
| `istartswith`  | Same as startswith, but case-insensitive         |
| `time`         | Matches a time (for datetimes)                   |
| `week`         | Matches a week number (1-53) (for dates)         |
| `week_day`     | Matches a day of week (1-7) 1 is Sunday          |
| `iso_week_day` | Matches a ISO 8601 day of week (1-7) 1 is Monday |
| `year`         | Matches a year (for dates)                       |
| `iso_year`     | Matches an ISO 8601 year (for dates)             |

### Admin Panel {.col-span-2}

Every Django projects come with an Admin Panel that can be open at /admin url (ex: localhost:8000/admin)<br> To display
the model in the Admin panel register the model in the app_name/admin.py file<br> For each models you can specify the
fields you want to use</small>

```python
from django.contrib import admin
from app_name.models import Blog

# Custom model Admin (admin.py):
@admin.register(Blog)   # Register app
class BlogAdmin(admin.ModelAdmin)
    fields = ("title", "description") # Fields to use for add/edit/show page
    list_display = ("title", "description") # fields to display in search page
    list_display_links = ("title",) # fields that will be a link in search page
    ordering = ("date_created",) # Ordering allowed in the search page
    search_fields = ("title", "description") # Search fields allowed in the search page
    list_filter =("title",) # define list filters that appear in the right sidebar
```

### Routing

Django routing info is store in project_folder/urls.py file

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls), # pre-created admin urls routes
    path('', include('app_name.urls')) # include your app urls
]
```

The 'include()' method allow to link another urls.py file created in your app folder (app_name/urls.py)

```python
from django.urls import path
from app_name import views

urlpatterns = [
    path('posts', views.index, name='posts.index'),
    path('posts/create/', views.create, name='posts.create',
    path('posts/<int:id>/', views.show, name='posts.show'),
    path('posts/<int:id>/edit/', views.edit, name='posts.edit'),
    path('posts/<int:id>/delete/', views.delete, name='posts.delete'),
    path('posts/<int:id>/<int:state>/', views.status, name='posts.status'), # two arguments
]
```

## Static Route and Customize Admin Panel {.cols-1}

### Customizing Admin Panel

Header and Title admin panel & Custom `404`, `500`, and `503` Template

```python
# add in project/urls.py
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [  ...  ]

if settings.DEBUG == True:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Customize Admin Panel Header & Title
admin.site.site_header = _('Administrator Control Panel')
admin.site.site_title = _('Administrator Control Panel')
admin.site.index_title = _('Wellcome to Control Panel')

# Costomize 404 Template page
handler404 = 'app_name.views.handler404'
handler500 = 'app_name.views.handler500'
handler503 = 'app_name.views.handler503'
```

## Views {.cols-1}

### Function Based Views

```python
# views.py
from django.shortcuts import render, redirect
from app_name.models import Post
from app_name.forms import PostForm

def index(request):
    # Get all Posts
    posts = Post.objects.all()

    # Render app template with context
    return render(request, 'appfolder/index.html', {'posts': posts})

def show(request, id):
    post = Post.objects.get(id=id)
    return render(request, 'appfolder/show.html', {'post': post})

def create(request):
    form = PostForm(request.POST or None, request.FILES or None)
    # When the form contains an image or file field, we should use request.FILES
    if form.is_valid():
        # optionally we can access form data with form.cleaned_data['first_name']
        post = form.save(commit=False)
        post.user = request.user
        post.save()
        return redirect('/posts')

    return render(request, 'appfolder/create.html', {'form': form)

def edit(request, id):
    post = Post.objects.get(id=id)
    form = PostForm(request.POST or None, request.FILES or None, instance=post)
    if form.is_valid():
        form.save()
        return redirect('/posts')

    return render(request, 'appfolder/edit.html', {'form': form)

def delete(request, id):
    post = Post.objects.get(id=id)
    post.delete()
    return redirect('/posts')

def status(request, id, state):
    post = Post.objects.get(id=id, state=state)
    return redirect('appfolder/status.html', {'post': post})
```

### Class Based Views

```python
from django.views.generic import TemplateView, ListView, DetailView,
           CreateView, UpdateView, DeleteView

class LandingPageView(TemplateView):
    template_name = 'landing.html'

    # Optional: Change context data dict
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Landing Page'
        return context


class PostsListView(ListView):
    queryset = Post.objects.all()
    # Optional
    # context_object_name = "posts" (default: post_list)
    # template_name = 'posts.html' (default: posts/post_list.html)


class PostsDetailView(DetailView):
    model = Post # object var in template
    # Optional
    # template_name = 'post.html' (default: posts/post_detail.html)


class PostsCreateView(CreateView):
    form_class = PostForm
    template_name = 'posts/post_create.html' # no default value

    def get_success_url(self):
        return reverse('posts-list')

    # Optional: Overwrite form data (before save)
    def form_valid(self, form):
        if self.request.user.is_authenticated:
            from.instance.author = self.request.user
        return super().form_valid(form)


class PostsUpdateView(UpdateView):
    model = Post
    form_class = PostForm
    template_name = 'posts/post_update.html'

    def get_success_url(self):
        return reverse('post-list')

    # Optional: Change context data dict
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['submit_text'] = 'Update'
        return context


class PostsDeleteView(DeleteView):
    model = Post
    template_name = 'posts/post_delete.html'
    success_url = reverse_lazy('posts-list')

# Urls.py route declaration
path('<int:pk>/update/', PostsUpdateView.as_view(), name='post-update')
```

## Templates

### Basic Template

Templates are store in `project_folder/templates` or in your <code>app_folder/templates/app_name/\*.html</code>

```html
<!-- Extend from another template -->
<!-- can use the same parts of your HTML for different template -->
{% extends 'base.html' %}

<!-- A part of the parent template that is defined and is replaced by a part in the child template -->
{% block contents %} {% endblock contents %}

<!-- include template-->
{% include 'partials/header.html' %}
<!-- include template with One or More Parameters -->
{% include 'body.html' with key1=value1 key2=value2 %}

<!-- If statement in template -->
{% if user.username = 'Mike' %}
<p>Hello Admin</p>
{% elif user.username = 'john' %}
<p>Hello John Doe</p>
{% else %}
<p>Hello User</p>
{% endif %}

<!-- for loop in template -->
{% for product in products %}
<p>row: {{ forloop.counter }} # starting index 1 {{ forloop.counter0 }} # starting index 0</p>
<p>The product name is {{ product.name }}</p>
<p></p>
<p>The product name is {{ product.price }}</p>
<p>
  {% endfor %}

  <!-- Access to the variable in the template -->
  {{ var_name }}

  <!-- Template variables formating  -->
  {{ title | lower }} {{ blog.post | truncatwords:50 }} {{ order.date | date:"D M Y" }} {{ list_items | slice:":3" }} {{
  total | default:"nil" }}

  <!-- Current path (ex. posts/1/show) -->
  {{ request.path }}

  <!-- URL by name with param -->
  {% url 'posts.delete' id=post.id %}

  <!-- Use static in template: -->
  {% load static %} {% static 'css/main.css' %}

  <!-- Define the variable in the template -->
  {% with name="World" %}
  <html>
    <div>Hello {{ name }}!</div>
  </html>
  {% endwith %}

  <!-- Template translate text -->
  {% load i18n %}
  <title>{% trans "This is the title." %}</title>
  <!-- Use variable translate in the template -->
  <title>{% trans object.title %}</title>

  <!-- Define the list in the template -->
  <input type="number" {% if product.unit in 'kg,milligram,milliliter' %} step="0.01" {% else %} step="1" {% endif %}>

  <!-- Safely Pass Data to JavaScript in a Django Template: -->
  <!--+ Use data attributes for simple values -->
  <script data-username="{{ username }}">
    const data = document.currentScript.dataset;
    const username = data.username;
  </script>

  <!-- + Separate script files: can use document.currentScript for separate script files -->
  <script src="{% static 'index.js' %}" data-username="{{ username }}"></script>

  <!-- + Case conversion -->
  <script src="{% static 'index.js' %}" data-full-name="{{ full_name }}"></script>
  <!--  Read it in JavaScript as fullName: -->
  <script>
    const data = document.currentScript.dataset;
    const fullName = data.fullName;
  </script>

  <!-- + Non-string types -->
  <script src="{% static 'index.js' %}" data-follower-count="{{ follower_count }}"></script>

  <!--  parseInt() to convert this value from a string: -->
  <script>
    const data = document.currentScript.dataset;
    const followerCount = parseInt(data.followerCount, 10);
  </script>

  <!-- + There’s no limit: A <script> can have as many data attributes as you like: -->
  <script
    src="{% static 'index.js' %}"
    defer
    data-settings-url="{% url 'settings' %}"
    data-configuration-url="{% url 'configuration' %}"
    data-options-url="{% url 'options' %}"
    data-preferences-url="{% url 'preferences' %}"
    data-setup-url="{% url 'setup' %}"
  ></script>
</p>
```

### Custom Template Tags and Filters

For example, if your custom tags/filters are in a file called `basetags.py`, your app layout might look like this:

```
app_name/
└─── templatetags/
     └─── basetags.py
     __init__.py
     models.py
     views.py
```

- And in your template you would use the following:

```html
{% load basetags %}
```

- the module must contain a module-level variable named register that is a template.Library instance, in which all the
  tags and filters are registered. So, near the top of your module, put the following:

### Writing custom template filters

Custom filters are Python functions that take one or two arguments: The value of the variable (input) – not necessarily
a string. The value of the argument – this can have a default value, or be left out altogether. For example, in the
filter `{{ var|foo:"bar" }}`, the filter foo would be passed the variable var and the argument "bar".

The Library.filter() method takes two arguments: The name of the filter – a string. The compilation function – a Python
function (not the name of the function as a string). You can use register.filter() as a decorator instead:

```python
# basetags.py
from django import template

register = template.Library()

@register.filter(name="cut")
def cut(value, arg):
    """Removes all values of arg from the given string"""
    return value.replace(arg, "")

# Most filters don’t take arguments. In this case, leave the argument out of your function
@register.filter()
def lower(value): # Only one argument.
    """Converts a string into all lowercase"""
    return value.lower()


@register.simple_tag
def to_class_name(object):
    return str(object.__class__.__name__)

# Template
# And here’s an example of how that filter would be used in Template:
{{ somevariable | cut:"0" }}

# Put the result of simple tag into a variable
{% to_class_name object as objectmodel %}
<p>Model Class Name: {{ objectmodel }}</p>
```

## Context Processor {.cols-1}

### Creating custom Context Processor

Anywhere, create a `context_processors.py` file

```
project_name
└───app_name
    ├───...
    └───context_processors.pyy
```

Create a function in context_processors.py that accepts a HttpRequest object as an argument and returns a dictionary

A context processor is just a function that accepts an HttpRequest object as an argument and returns a dictionary. Like
this:

```python
# app_name/context_processors.py
def site_email(request):
    return { 'site_email' : 'example@gmail.com' }
```

3. Add this to your context_processors setting in settings.py (at the bottom for security reasons)

```python
 TEMPLATES = [
    { …
        'OPTIONS': {
          'context_processors': [
            …
              'app_name.context_processors.site_email',
              # New context processor here
            …
          ],
    … },

# Now be able to access the 'site_email' template variable on every single django template across your whole site.
```

## Model Managers and Querysets

### Model Manager

Model manager allow model database reads and writes

```python
# One line create and save
Article.objects.create(name='Item 1', price=19.95)

# Read all
Article.objects.all()

# Create
user = User.objects.first()
article = Article(user=user, name='Item 1', price=19.95)

# Save
article.save()

# Read one
Article.objects.get(id=1)

# Select Related (to avoid n+1 query)
posts = Post.objects.select_related('user', 'category').all()

# Read or render a 404 not found page
from django.shortcuts import get_object_or_404
article = get_object_or_404(Article, id=512)

# Filter
Article.objects.filter(model='dyson', name__icontains='dyson') # __icontains
Article.objects.filter(year__gt=2016) # __gt = greater than
Article.objects.filter(year__lt=2001) # __lt = less than

# Filter on relationship sub model field
Article.objects.get(user__username='mike')

# Ordering
Article.objects.order_by('name')     # ascending
Article.objects.order_by('-name')   # descending

# Slicing return first
Article.objects.all().order_by('name')[0]

# Slicing return last
Article.objects.all().order_by('-name')[0]

# Slicing limit/offset
Article.objects.all().order_by('name')[1..10]

# Updating
article = Article.objects.first()
article.name = 'new name'
article.save()

# One line update
Article.objects.filter(id=4).update(name='new name')

# Deleting
article = Article.objects.first()
article.delete()

# One line delete
article.objects.get(id=1).delete()

# Delete all
Article.objects.all().delete()

# Set ForeignKey field value
model1 = Model(name='dyson')
article.model = model1

# Get ForeignKey value
article1.model.name
model1.article_set.all()

# Add Many-to-Many
article1.tags.add(tag1)
article1.tags.all()
tag1.articles_set.all()
```

## Form

### Form creation {.col-span-2}

In HTML, a form is a collection of elements inside `<form>...</form>` that allow a visitor to do things like enter text,
select options, manipulate objects or controls, and so on, and then send that information back to the server.

```python
# app_name/forms.py
from django import forms
class ArticleForm(forms.Form):
    name = forms.Charfield(max_length=100)
    description = forms.Charfield(blank=True, null = True)


# Model Form
from django.forms import ModelForm
from app_name.models import Article
class ArticleForm(ModelForm):
    class Meta:
        model = Article
        fields = ['name', 'description', 'price'] # Use '__all__' for all fields
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
        }
        labels = {
            'name': 'First Name',
        }
        error_messages = {
            'name': {'required': 'This field is required',},
            }
        help_texts = {
        'name': 'Enter Your First Name',
        }
```

```html
<!-- Render form in template -->
<form method="“post”" action="“”" novalidate>
  {% csrf_token %} {{ form }}
  <button type="submit">Submit</button>
</form>
```

- NOTE: If the form contains a file field, your form MUST contain `enctype="multipart/form-data"`, eg:

```html
<form action="" method="post" enctype="multipart/form-data">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">{% trans 'Submit' %}</button>
</form>
```

##### A Tailwind CSS template pack for the wonderful django-crispy-forms.

```bash
pip install crispy-tailwind
```

```python
# settings.py
INSTALLED_APPS = (
    ...
    "crispy_forms",
    "crispy_tailwind",
    ...
)
CRISPY_ALLOWED_TEMPLATE_PACKS = 'tailwind'
CRISPY_TEMPLATE_PACK = 'tailwind'
```

```html
<!-- template usage -->
{% load tailwind_filters %} {{ form|crispy }}
```

### Form Validation

```python
# forms.py
from django.core.exceptions import ValidationError

# field validation
def clean_first_name(self):
    data = self.cleaned_data['first_name']
    if data = 'Mike':
        raise ValidationError('Your name must not be Mike')
    return data

# form validation
def clean(self):
    first_name = self.cleaned_data['first_name']
    last_name = self.cleaned_data['last_name']
    if first_name + last_name = 'MikeTaylor':
        raise ValidationError('Your name must not be Mike Taylor')
```

## Flash messages {.cols-1}

### Displaying messages

```python
# Message tags
# debug, info, success, warning and error

messages.success(request, 'Login successful')
messages.error(request, 'Login error')
```

```html
<!-- Display flash messages in template -->
{% if messages %} {% for message in messages %} {% message %} {% message.tags %} {% endfor %} {% endif %}
```

## User Model

### Pre-created

User Model (pre-created)

```python
# Get a reference to Django pre-created User model
from django.contrib.auth import get_user_model

User = get_user_model()

# Or if you want to custom user model
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # add custom fields and methods

# To make Django use that model go to settings.py and add: AUTH_USER_MODEL = 'app_name.User'
```

## Authentication

### Authentication : LoginView

```python
# LoginView is already pre-created by Django
from django.contrib.auth.views import LoginView

# Add a url to reach that view
path('login/', LoginView.as_view(), name='login')

# By default the LoginView will try to open a template name 'registration/login.html' and send a login form with it.
```

```html
<!-- Create a template under registration/login.html -->
{% extends "base.html" %} {% block content %}
<form method="post">
  {% csrf_token %} {{ form }}
  <button type="submit">Login</button>
</form>
{% endblock content %}

<!-- When user click the Login button, the LoginView will try to authenticate the user with the form username ans password -->

<!-- If successful il will then login the user and redirect to LOGIN_REDIRECT_URL specified in your settings.py -->
```

#### Authentication : LogoutView

```python
# LogoutView is already pre-created by Django
from django.contrib.auth.views import LogoutView

# Add a url to reach that view
path('logout/', LoginView.as_view(), name='logout')

# Include a link in a template
<a> href="{% url 'logout' %}">Logout</a>

# After link is execute, the user will be logout and redirect to LOGOUT_REDIRECT_URL specified in your settings.py
```

#### Authentication : SignupView

```python
# Create a SignupView (that view is not created by default)
# import sinupview form pre-created by Django
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView

class SignupView(CreateView):
    template_name = 'registration/signup.html'
    form_class = UserCreationForm

    def get_success_url(self):
        return reverse("login")
```

```html
<!-- Create template: registration/signup.html -->
{% extends "base.html" %} {% block content %}
<form method="post">
  {% csrf_token %} {{ form }}
  <button type="submit">Signup</button>
</form>
{% endblock content %}
```

```python
# Add a url to reach that view
from posts.views import SignupView

path('signup/', SignupView.as_view(), name='signup')
```

```python
# Optional: Customize the UserCreationForm
# (forms.py)
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm

User = get_user_model()
class CustomUserCreationForm(UserCreattionForm):
    class Meta:
        model = User
        fields = ['username']
        fields_classes = {'username': UsernameField}
```

#### Optional pre-created Authentication routes

```python
# urls.py
urlpatterns += path('', include('django.contrib.auth.urls'))
# /login, /lougout, /signup, etc.
```

#### Template Authentication helpers

```html
<!-- Authentication links -->
<a href="{% url 'login' %}">Login</a>
<a href="{% url 'signup' %}">Signup</a>
<a href="{% url 'logout' %}">Logout</a>

<!-- Check if user login -->
{% if request.user.is_authenticated %} Logged in as: {{ request.user.username }} {% endif %}
```

#### Authorization: LoginRequiredMixin and login_required

```python
from django.contrib.auth.mixins import LoginRequiredMixin

# Restrict views to auth user only (views.py)
class PostsCreateView(LoginRequiredMixin, generic.CreateView):
    ...
    ...


from django.contrib.auth.decorators import login_required

@login_required(login_url='/login')
def search_page(request):
    ...
    ...
```

#### Manual Authentication , Login and Logout

```python
from django.contrib.auth import authenticate, login

def login_page(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("index")

return render(request, "registration/login.html", {})


def logout_page(request):
    logout(request)
    return redirect("index")
```

#### User Change password

```python
# set_password will hash the password
user.set_password('raw password')
```

## Create Custom Accounts Model

```python
~$ python manage.py startapp accounts
```

```python
# Add accounts app to settings.py
INSTALLED_APPS = [ … ,
         'accounts.apps.AccountsConfig',
          ]
.
.
.
AUTH_USER_MODEL = 'accounts.User'
```

```python
# accounts/models.py
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not username:
            raise ValueError('Users must have an username')
        if not email:
            raise ValueError('Users must have an email')

        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username,  email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        user = self.create_user(username, email, password=password, **extra_fields)
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(verbose_name='Username', max_length=255, unique=True)
    email = models.EmailField(verbose_name='email', max_length=255, unique=True)
    phone = models.BigIntegerField(verbose_name='Phone Number', unique=True, blank=True, null=True)
    is_active = models.BooleanField(default=True, verbose_name="is_active")
    is_staff = models.BooleanField(default=False, verbose_name="is_staff")
    is_superuser = models.BooleanField(default=False, verbose_name="is_superuser")

    objects = UserManager()

    # We can use any field for username
    USERNAME_FIELD = 'username'  # or 'email' or 'phone'
    REQUIRED_FIELDS = ['username', 'email']

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
```

```python
# accounts/forms.py
from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from accounts.models import User
from django.utils.translation import gettext_lazy as _


class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('username', 'email', 'phone', 'is_active', 'is_staff')

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('username', 'email', 'phone', 'is_active', 'is_staff')

    def clean_password(self):
        return self.initial["password"]


class LoginForm(forms.Form):
    email = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Email'}), label='Email')
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password'}),label='Password')


class RegisterForm(forms.ModelForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput(
        attrs={'class': 'form-control'}))
    password2 = forms.CharField(label='Password confirmation',
                                widget=forms.PasswordInput(attrs={'class': 'form-control'}))

    class Meta:
        model = User
        fields = ('username', 'email', 'phone')

        widgets = {  # Optional
            'username': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
            'phone': forms.NumberInput(
                attrs={'class': 'form-control', 'type': 'tel', 'maxlength': '11',
                       'minlength': '11',  'onkeypress': 'return isNumber(event)', 'required': 'false'})}

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        else:
            return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user

class EditProfileForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'phone')


class ChangePassword(forms.Form):
    password1 = forms.CharField(label=_('Password'), widget=forms.PasswordInput(
        attrs={'class': 'form-control', 'placeholder': 'Password'}))
    password2 = forms.CharField(label=_('Password confirmation'),
                                widget=forms.PasswordInput(
                                    attrs={'class': 'form-control', 'placeholder': 'Re-Enter Password'}))

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        else:
            return password2
```

```python
# accounts/admin.py
from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from django.contrib.auth.models import Group
from accounts.models import User


class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('username', 'email', 'phone')

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('username', 'email', 'phone', 'password', 'is_active', 'is_staff')


class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    list_display = ('username', 'email', 'is_active', 'is_staff', 'is_superuser')
    list_editable = ('is_staff', 'is_active')
    list_filter = ('is_staff', 'groups')
    fieldsets = (
        (None, {'fields': ( 'username', 'email', 'phone', 'password')}),
        ('Permissions', {'fields': ('is_staff',)}),
        ('Group Permissions', {
            'fields': ('is_active', 'is_superuser', 'groups', 'user_permissions'),
        })
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'phone', 'password1', 'password2'),
        }),
        ('Group Permissions', {
            'fields': ('is_active', 'is_superuser', 'groups', 'user_permissions'),
        })
    )
    search_fields = ('username', 'email', 'phone')
    ordering = ('username', 'email', 'phone')
    filter_horizontal = ('groups', 'user_permissions',)


admin.site.register(User, UserAdmin)
# unregister the Group model from admin.
# admin.site.unregister(Group)
```

```python
# accounts/urls.py
from django.urls import path
from accounts import views

app_name = 'accounts'
urlpatterns = [
    path('login/', views.userLogin, name='login'),
    path('register/', views.userRegister, name='register'),
    path('logout/', views.LogoutPage, name='logout')
]
```

```python
# accounts/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.utils.translation import gettext_lazy as _
from accounts.forms import LoginForm, RegisterForm
from django.contrib import messages
from accounts.models import User


def userRegister(request):
    form = RegisterForm()
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            if not User.objects.filter(email=cd['username']).exists():
                if not User.objects.filter(email=cd['email']).exists():
                    user = User.objects.create_user(
                        username=cd['username'], phone=cd['phone'], email=cd['email'], password=cd['password1'])
                    user.save()
                    login(request, user)
                    messages.success(request, _("You successfully registered a user"), extra_tags="success")
                    return redirect('app_name:home')
                else:
                    messages.error(request, _("This Email is exists"), extra_tags="warning")
            else:
                messages.error(request, _("This Username is exists"), extra_tags="warning")
        else:
            import json
            er = json.loads(form.errors.as_json())
            for e in er:
                messages.error(request, er[e][0]['message'], 'warning')
    return render(request, 'accounts/register.html', {'form': form})


def userLogin(request):
    if not request.user.is_active:
        if request.method == 'POST':
            form = LoginForm(request.POST)
            if form.is_valid():
                cd = form.cleaned_data
                if User.objects.filter(username=cd['username']).exists():
                    user = authenticate(request, username=cd['username'], password=cd['password'])
                    if user is not None:
                        login(request, user)
                        messages.success(request, _("logged in successfully"), extra_tags="success")
                        return redirect('app_name:home')
                    else:
                        messages.error(request, _("your username Or Password is wrong"), extra_tags="warning")
                else:
                    messages.error(request, _("No account created with this username"), extra_tags="warning")
                    return redirect('accounts:login')
            else:
                messages.error(request, _("Please enter your information correctly"), extra_tags="warning")
        else:
            form = LoginForm()
        return render(request, 'accounts/login.html', {'form': form})
    else:
        return redirect('app_name:home')


@login_required()
def LogoutPage(request):
    logout(request)
    messages.success(request, _("You Logged Out successfully"), extra_tags="success")
    return redirect('app_name:home')
```

## Send Email

```python
# settings.py
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

# Send email function
from django.core.email import send_mail

send_mail(
    subject = "A new post has been created",
    message = "Go to the web site to see the detail",
    from_email = "test@test.com",
    recipient_list = ["test2@text.com"]
)
```

## Signals

```python
# models.py
from django.db.models.signals import post_save, pre_save

def post_user_created_signal(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

# Launch the post_user_created_signal method if User model is save
post_save.connect(post_user_created_signal, sender=User)
```

## Seed

```python
from app_name.models import Product, Category
from django.shortcuts import HttpResponse
from faker import Faker


def seed(request):
    Product.objects.all().delete()
    Category.objects.all().delete()

    category = Category()
    category.name = "Sports"
    category.save()

    category = Category()
    category.name = "Home"
    category.save()

    fake = Faker()
    for _ in range(100):
        product = Product()
        product.name = fake.unique.word()
        product.short_description = fake.sentence()
        product.main_picture = fake.image_url()
        product.price = fake.random_digit() * 10
        product.category =  Category.objects.order_by('?').first()
        product.save()

    return HttpResponse('Seeded')
```

## Environment Variables

### .env key/value file

```python
$ pip install python-decouple
```

Create a file name '.env' in the root folder of your project

```python
SECRET_KEY = 'your secret key'
ALLOWED_HOST = 127.0.0.1
```

In settings.py change security related settings to point to the .env file

```python
from decouple import config

SECRET_KEY = config('SECRET_KEY')
ALLOWED_HOST = config('ALLOWED_HOST')
```

## Asynchronous Tasks

### Django Celery Redis

Celery is a distributed task queue that can collect, record, schedule, and perform tasks outside of your main program.

#### Step 1: Install Celery Using pip

```python
~$ pip install celery       # pip install celery[redis]
```

#### Step 2. Add celery.py File in Your Project Module

```python
# your_project/celery.py
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE','your_project_name.settings')
app = Celery('your_project_name')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()

@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
```

#### Step 3: Import the Celery App to Django

<small>To ensure that the Celery app is loaded when Django starts, add the following code into the `__init__.py` file
that sits on the project module beside on settings.py file.</small>

```python
# your_project/__init__.py
from .celery import app as celery_app

__all__ = ('celery_app',)
```

#### Step 4: Download and Run Redis as a Celery ‘broker’

```python
~$ redis-server
```

<small>You can test that Redis is working properly by typing this into your terminal:</small>

```python
~$ redis-cli ping
```

Redis should reply with PONG - try it!

#### Step 5: Add Redis as a Dependency in the Django Project:

```python
~$ pip install redis
```

#### Step 6: Celery Stuff Configure to the Django Settings File

Once Redis is up, add the following code to your settings.py file and use celery-result

```python
~$ pip install django-celery-results
```

This extension enables you to store Celery task results using the Django ORM.<br> It defines a single model
(`django_celery_results.models.TaskResult`) used to store task results, and you can query this database table like any
other Django model.

```python
INSTALLED_APPS = [
                … ,
                'django_celery_results',
                ]

BROKER_URL = 'redis://localhost:6379'
CELERY_RESULT_BACKEND = 'redis://localhost:6379'
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = TIME_ZONE
CELERY_RESULT_BACKEND = 'django-db'
CELERY_CACHE_BACKEND = 'django-cache'

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.db.DatabaseCache',
        'LOCATION': 'redis://localhost:6379/1',
        "OPTIONS": {
                    "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    }
}
```

#### That’s it! You should now be able to use Celery with Django

Test that the Celery worker is ready to receive tasks:

```python
~$ celery -A your_project_name worker -l info
```

The most important task is: Always run a worker is needed to execute the celery task if any error throws from Redis like
this:

```python
AttributeError: 'str' object has no attribute 'items'
```

- the solution is: you have to use Redis old version

### Add a New Task

#### Step 1: Add tasks.py File to Your Django App.

```python
# app_name/tasks.py
from celery import shared_task
from celery.decorators import task
from time import sleep


@task(name='my_first_task')
def my_first_task(duration):
    sleep(duration)
    return('first_task_done')

@shared_task
def test_func():
    for i in range(10):
        print(i)
    return 'End_OK'

@shared_task
def adding(x, y):
    time.sleep(10)
    result = x + y
    return result
```

#### Step 2: Assign Task to the Celery.

You need to assign a task to the celery. To assign this task you need to call this function with something different.
celery gives us two methods `delay()` and `apply_async()` to call task.

```bash
# Normal function call in python
~$ my_first_task()

# add task to the celery with function call
~$ my_first_task.delay()
```

You can send argument to the function using the delay method. <small>To check celery on the action open a separate tab
of the terminal then go to the project directory (activate environment if you are using one) and run this command
again</small>

```bash
~$ celery -A your_project_name worker -l info
```

### Create a View in your App

```python
# app_name/views.py
from django.http import HttpResponse
from app_name.tasks import my_first_task, test_func, adding

def index(request):
    my_first_task.delay(10)
    result = adding.delay(x=4, y=5)
    return HttpResponse(f'response done. {result}')

def test(request):
    test_func.delay()
    return HttpResponse("Done")
```

#### Then call the view from your app URL

```python
# app_name/urls.py
from django.urls import path
from app_name.views import index, test
urlpatterns = [
    path('celery-index/', index, name='celery_index_url'),
    path('celery-test/', test, name='celery_test_url'),
]
```

### Celery In Production Using Supervisor

#### Step 1: Install Supervisor on Ubuntu Server

```bash
~$ sudo apt-get install supervisor
```

#### Step 2: Add .conf File in Supervisor

```bash
~$ sudo nano /etc/supervisor/conf.d/app_name.conf
```

`app_name` can be anything you like, it should be similar to your project name.

#### Step 3: Add some Configure in app_name.conf

```bash
[program:your_app_name]
command=/path/to/env/bin/celery worker -A your_project_name --loglevel=INFO
directory=/path/to/workflow/your_project_name/
user=www-data
autostart=true
autorestart=true
stdout_logfile=/path/to/workflow/your_project_name/logs/celeryd.log
redirect_stderr=true
```

Describe the configure file:

```bash
[program:your_app_name]
#The name of your supervisord program

command=/path/to/env/bin/celery worker -A your_project_name --loglevel=INFO
#Set full path to celery program if using virtualenv

directory=/path/to/workflow/your_project_name/
#The directory to your Django project

user=www-data
#The web server has to be run under a specific user. That user must exist.

autostart=true
#If true, this program will start automatically when supervisord is started

autorestart=true
#May be one of false, unexpected, or true. If false, the process will never be autorestarted. If unexpected, the process will be restart when the program exits with an exit code that is not one of the exit codes associated with this process’ configuration (see exitcodes). If true, the process will be unconditionally restarted when it exits, without regard to its exit code.

stdout_logfile=/path/to/workflow/your_project_name/logs/celeryd.log
#Put process stdout output in this file

redirect_stderr=true
#If true, cause the process’ stderr output to be sent back to supervisord on its stdout file descriptor (in UNIX shell terms, this is the equivalent of executing /the/program 2>&1).
```

#### Step 4: Inform Configuration to the Server

After adding a new program, we should run the following two commands, to inform the server to reread the configuration
files and to apply any changes.

```python
~$ sudo supervisorctl reread
~$ sudo supervisorctl update
```

#### Managing Supervisor App

```bash
~$ sudo supervisorctl
```

You will be greeted with a list of the registered processes. You will see a process called `your_app_name` with a
`RUNNING` status.

```bash
your_app_name                 RUNNING   pid 6853, uptime 0:22:30
supervisor>
```

Type `help` for a list of available commands.

```bash
supervisor> help
default commands (type help <topic>):
=====================================
add    exit      open  reload  restart   start   tail
avail  fg        pid   remove  shutdown  status  update
clear  maintail  quit  reread  signal    stop    version
```

In a nutshell, we can `start`, `stop` and `restart` programs bypassing the program name as an argument to the respective
command. We can also take a look at the program output with the `tail` command. Once you are finished, you can `quit`.

```bash
~$ supervisor> quit
```

## Deployment Django in Server

### Set Up Django with Postgres, Nginx, and Gunicorn on Ubuntu server

#### Step 1 — Installing the Packages from the Ubuntu Repositories

```bash
sudo apt update
sudo apt install python3-venv python3-dev libpq-dev postgresql postgresql-contrib nginx curl
```

#### Step 2 — Creating the PostgreSQL Database and User

```bash
sudo -u postgres psql
```

- First, create a database for your project:

```bash
postgres=# CREATE DATABASE myproject;
```

- Next, create a database user for our project. Make sure to select a secure password:

```bash
postgres=# CREATE USER myprojectuser WITH PASSWORD 'password';
```

- Afterwards, you’ll modify a few of the connection parameters for the user that you just created

```bash
postgres=# ALTER ROLE myprojectuser SET client_encoding TO 'utf8';
postgres=# ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';
postgres=# ALTER ROLE myprojectuser SET timezone TO 'UTC';
```

- Now, you can give the new user access to administer the new database:

```bash
postgres=# GRANT ALL PRIVILEGES ON DATABASE myproject TO myprojectuser;
```

- When you are finished, exit out of the PostgreSQL prompt by typing:

```bash
postgres=# \q
```

#### Step 3 — Creating a Python Virtual Environment for your Project

- thin the project directory, create a Python virtual environment by typing:

```bash
mkdir ~/myprojectdir
cd ~/myprojectdir
```

- Within the project directory, create a Python virtual environment by typing:

```bash
python3 -m venv myprojectenv
```

- Before installing your project’s Python requirements, you will need to activate the virtual environment. You can do
  that by typing:

```bash
source myprojectenv/bin/activate
```

- With your virtual environment active, install Django, Gunicorn, and the psycopg2 PostgreSQL adaptor with the local
  instance of pip

```bash
(myprojectenv)$ pip install django gunicorn psycopg2-binary
```

#### Step 4 — Creating and Configuring a New Django Project

- With your Python components installed, you can now create the actual Django project files.

```bash
(myprojectenv)$ django-admin startproject myproject ~/myprojectdir
```

- The first thing you should do with your newly created project files is adjust the settings. Open the settings file in
  your text editor:

```bash
(myprojectenv)$ nano ~/myprojectdir/myproject/settings.py
```

- Start by locating the ALLOWED_HOSTS directive.

```python
# ~/myprojectdir/myproject/settings.py
ALLOWED_HOSTS = ['your_server_domain_or_IP', 'second_domain_or_IP', . . ., 'localhost']
```

- Next, find the section that configures database access. It will start with DATABASES. The configuration in the file is
  for a SQLite database.

```python
. . .
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'myproject',
        'USER': 'myprojectuser',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '',
    }
}
. . .
```

- Next, move down to the bottom of the file and add a setting indicating where the static files should be placed.

```python
. . .
STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

import os
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')
```

#### Step 5 — Completing Initial Project Setup

- Now, you can migrate the initial database schema to our PostgreSQL database using the management script:

```bash
(myprojectenv)$ ~/myprojectdir/manage.py makemigrations
(myprojectenv)$ ~/myprojectdir/manage.py migrate
```

- Create an administrative user for the project by typing:

```bash
(myprojectenv)$ ~/myprojectdir/manage.py createsuperuser
```

- You can collect all of the static content into the directory location that you configured by typing:

```bash
(myprojectenv)$ ~/myprojectdir/manage.py collectstatic
```

#### Step 6 — Testing Gunicorn’s Ability to Serve the Project

```bash
(myprojectenv)$ cd ~/myprojectdir
(myprojectenv)$ gunicorn --bind 0.0.0.0:8000 myproject.wsgi
```

- You’re now finished configuring your Django application. You can back out of our virtual environment by typing:

```bash
(myprojectenv)$ deactivate
```

#### Step 7 — Creating systemd Socket and Service Files for Gunicorn You have tested tha

```bash
sudo nano /etc/systemd/system/gunicorn.socket
```

- Inside, you will create a `[Unit]` section to describe the socket, a `[Socket]` section to define the socket location,
  and an `[Install]` section to make sure the socket is created at the right time:

```bash /etc/systemd/system/gunicorn.socket
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=sockets.target
```

- Save and close the file when you are finished.
- Next, create and open a systemd service file for Gunicorn with sudo privileges in your text editor. The service
  filename should match the socket filename with the exception of the extension:

```bash
sudo nano /etc/systemd/system/gunicorn.service
```

```bash
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=sammy
Group=www-data
WorkingDirectory=/home/sammy/myprojectdir
ExecStart=/home/sammy/myprojectdir/myprojectenv/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          myproject.wsgi:application

[Install]
WantedBy=multi-user.target
```

- You can now start and enable the Gunicorn socket. This will create the socket file at /run/gunicorn.sock now and at
  boot. When a connection is made to that socket, systemd will automatically start the gunicorn.service to handle it

```bash
sudo systemctl start gunicorn.socket
sudo systemctl enable gunicorn.socket
```

#### Step 8 — Checking for the Gunicorn Socket File

- Check the status of the process to find out whether it was able to start:

```bash
sudo systemctl status gunicorn.socket
```

- Next, check for the existence of the gunicorn.sock file within the /run directory:

```bash
file /run/gunicorn.sock
```

#### Step 9 — Testing Socket Activation

```bash
sudo systemctl status gunicorn
```

- To test the socket activation mechanism, you can send a connection to the socket through curl by typing:

```bash
curl --unix-socket /run/gunicorn.sock localhost
```

- You should receive the HTML output from your application in the terminal. This indicates that Gunicorn was started and
  was able to serve your Django application. You can verify that the Gunicorn service is running by typing:

```bash
sudo systemctl status gunicorn
```

- Check your /etc/systemd/system/gunicorn.service file for problems. If you make changes to the
  /etc/systemd/system/gunicorn.service file, reload the daemon to reread the service definition and restart the Gunicorn
  process by typing

```bash
sudo systemctl daemon-reload
sudo systemctl restart gunicorn
```

#### Step 10 — Configure Nginx to Proxy Pass to Gunicorn

- Start by creating and opening a new server block in Nginx’s sites-available directory:

```bash
sudo nano /etc/nginx/sites-available/myproject
```

```bash
server {
    listen 80;
    server_name server_domain_or_IP;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        alias /home/sammy/myprojectdir/staticfiles/;
    }

    location /media {
        autoindex on;
        alias /home/sammy/myprojectdir/media/;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```

- Save and close the file when you are finished. Now, you can enable the file by linking it to the sites-enabled
  directory:

```bash
sudo ln -s /etc/nginx/sites-available/myproject /etc/nginx/sites-enabled
```

- Test your Nginx configuration for syntax errors by typing:

```bash
sudo nginx -t
```

- If no errors are reported, go ahead and restart Nginx by typing:

```bash
sudo systemctl restart nginx
```

- you need to open up your firewall to normal traffic on port 80

```bash
sudo ufw allow 'Nginx Full'
```

You should now be able to go to your server’s domain or IP address to view your application.

#### Step 11 — Troubleshooting Nginx and Gunicorn

- Nginx Is Showing the Default Page Instead of the Django Application

```bash
sudo tail -F /var/log/nginx/error.log
```

- Django Is Displaying: “could not connect to server: Connection refused”

```bash
sudo systemctl status postgresql
```

- If it is not, you can start it and enable it to start automatically at boot (if it is not already configured to do so)
  by typing:

```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

If you change Gunicorn socket or service files, reload the daemon and restart the process by typing:

```bash
sudo systemctl daemon-reload
sudo systemctl restart gunicorn.socket gunicorn.service
```

If you change the Nginx server block configuration, test the configuration and then Nginx by typing:

```bash
sudo nginx -t && sudo systemctl restart nginx
```
