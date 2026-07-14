from django.shortcuts import render
from .models import Post

# Create your views here.
def home(request):
    all_posts = Post.objects.all().order_by("-created_at")
    return render(request, "blog/home.html", {"posts": all_posts})
