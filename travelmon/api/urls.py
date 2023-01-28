from django.urls import path
from api.views import LoginUser, LogoutUser, ListLocations, ListWeathers

urlpatterns = [
    path("login-user", LoginUser.as_view()),
    path("logout-user", LogoutUser.as_view()),
    path("get-locations", ListLocations.as_view()),
    path("get-weathers", ListWeathers.as_view()),
]
