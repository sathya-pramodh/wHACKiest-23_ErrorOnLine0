from django.urls import path
from .views import index

urlpatterns = [
    path("", index),
    path("home", index),
    path("login", index),
    path("user/home", index),
    path("user/Goa", index),
    path("user/Delhi", index),
    path("user/Manali", index),
]
