# 📝 Django Blog Backend

> A simple, clean blog application built with Django 6.0.6

[![Python Version](https://img.shields.io/badge/python-3.8%2B-blue.svg)](https://python.org)
[![Django Version](https://img.shields.io/badge/django-6.0.6-green.svg)](https://djangoproject.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📋 Table of Contents

- [✨ Overview](#-overview)
- [⚡ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [📡 Routes](#-routes)
- [🧪 Running the Server](#-running-the-server)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Overview

**Django Blog Backend** is a lightweight blog application built with Django. It provides a clean interface for creating and displaying blog posts. Perfect for learning Django basics or as a starting point for a personal blog. ✍️

---

## ⚡ Features

- 📝 **Post Management** – Create and display blog posts with title, content, and author
- 📅 **Auto-timestamps** – Posts are automatically dated when created
- 📋 **Ordered Display** – Posts shown from newest to oldest
- 🎨 **Simple & Clean** – Minimal design, easy to customize
- 🗄️ **SQLite Database** – Lightweight, no separate database setup needed

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend** | Django 6.0.6 |
| **Database** | SQLite (default) |
| **Templates** | Django Templates |
| **Python** | 3.8+ |

---

## 📁 Project Structure

```
django-blog-backend/
├── myproject/
│   ├── blog/                    # Main blog app
│   │   ├── migrations/          # Database migrations
│   │   ├── templates/blog/      # HTML templates
│   │   │   └── home.html        # Homepage template
│   │   ├── __init__.py
│   │   ├── admin.py             # Admin registration
│   │   ├── apps.py              # App config
│   │   ├── models.py            # Post model
│   │   ├── tests.py             # App tests
│   │   ├── urls.py              # App routes
│   │   └── views.py             # Home view
│   ├── myproject/               # Project config
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py          # Django settings
│   │   ├── urls.py              # Main URL config
│   │   └── wsgi.py
│   └── manage.py                # Django management script
├── .gitignore
├── LICENSE
├── README.md
└── requirements.txt             # Dependencies: asgiref, Django, sqlparse
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- Python 3.8+
- pip

### 🔧 Installation

#### 1. Clone the repository

```bash
git clone https://github.com/MisaghMomeniB/django-blog-backend.git
cd django-blog-backend
```

#### 2. Create & activate virtual environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

#### 3. Install dependencies

```bash
pip install -r requirements.txt
```

#### 4. Run migrations

```bash
python myproject/manage.py makemigrations
python myproject/manage.py migrate
```

#### 5. Create a superuser (optional, for admin access)

```bash
python myproject/manage.py createsuperuser
```

#### 6. Start the development server

```bash
python myproject/manage.py runserver
```

Your blog is now running at **http://127.0.0.1:8000** 🎉

---

## 📡 Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage – displays all blog posts (newest first) |
| `/admin/` | Django admin panel (login required) |

---

## 📝 The Post Model

```python
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=100, default="Agha Misagh")

    def __str__(self):
        return self.title
```

---

## 🧪 Running the Server

```bash
cd myproject
python manage.py runserver
```

Then open **http://127.0.0.1:8000** in your browser.

---

## 🤝 Contributing

Contributions are welcome! 🚀

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/AmazingFeature`
3. **Commit** your changes: `git commit -m 'Add some AmazingFeature'`
4. **Push** to the branch: `git push origin feature/AmazingFeature`
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**⭐ If you found this helpful, please give it a star! ⭐**

Built with ❤️ and Django

</div>
